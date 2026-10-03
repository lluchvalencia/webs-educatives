import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const code=readFileSync(new URL('./bank.js',import.meta.url),'utf8')+'\n'+readFileSync(new URL('./app.js',import.meta.url),'utf8').split('const defaultState=')[0]+'\n;({readings,qCounter})';
const {readings,qCounter}=vm.runInNewContext(code);
const questions=readings.flatMap(r=>r.questions);
const lengths=readings.map(r=>({id:r.id,words:r.text.trim().split(/\s+/).length})).sort((a,b)=>a.words-b.words);
const answerPositions=[0,1,2,3].map(i=>questions.filter(q=>q.correct===i).length);
const longest=questions.filter(q=>q.options.every((x,i)=>i===q.correct||q.answer.length>x.length)).length;
const skillCounts=Object.fromEntries(['locate','infer','integrate','reflect'].map(s=>[s,questions.filter(q=>q.skill===s).length]));
if(process.argv.includes('--details'))console.log(questions.filter(q=>q.options.every((x,i)=>i===q.correct||q.answer.length>x.length)).map(q=>`${q.id} | ${q.answer} | ${q.options.filter((_,i)=>i!==q.correct).sort((a,b)=>b.length-a.length)[0]}`).join('\n'));
const errors=[];
const ids=new Set();
for(const r of readings){if(ids.has(r.id))errors.push(`duplicate reading ${r.id}`);ids.add(r.id);if(r.questions.length!==8)errors.push(`${r.id}: ${r.questions.length} questions`);if(r.text.trim().split(/\s+/).length<100)errors.push(`${r.id}: short text`);for(const q of r.questions){if(q.options.length!==4)errors.push(`${q.id}: option count`);if(new Set(q.options).size!==4)errors.push(`${q.id}: duplicate options`);if(q.options[q.correct]!==q.answer)errors.push(`${q.id}: wrong answer mapping`);}}
if(answerPositions.some(n=>n!==questions.length/4))errors.push('unbalanced answer positions');
if(Object.values(skillCounts).some(n=>n!==questions.length/4))errors.push('unbalanced cognitive skills');
if(longest/questions.length>.35)errors.push('correct answer too often longest');
console.log(JSON.stringify({readings:readings.length,questions:qCounter,wordRange:[lengths[0],lengths.at(-1)],medianWords:lengths[Math.floor(lengths.length/2)].words,answerPositions,correctLongest:longest,skills:skillCounts,errors},null,2));
if(errors.length||readings.length<40||qCounter<320)process.exitCode=1;
