(function(){
'use strict';
if(window.CCChinese)return;

const EXACT=new Map(Object.entries({
  'Classroom Companion':'课堂小助手',
  'Classroom Support':'课堂支持',
  'Close':'关闭','Main':'返回','Class':'班级','Project':'投影模式','Exit':'退出','Search':'搜索','Undo':'撤销','Reset':'重置','Stop':'停止','Pause':'暂停','Resume':'继续','Next':'下一个','Start':'开始','Ready!':'准备好了！','General':'通用',

  'Timer + Calm Music':'计时器＋轻音乐','Make time visible and predictable.':'让时间清楚可见，更容易掌握。','Focus time':'专注时间','See how much time is left. Work calmly, one step at a time.':'看看还剩多少时间。保持平静，一步一步完成。','♫ Calm music: On':'♫ 轻音乐：开','♫ Calm music: Off':'♫ 轻音乐：关','▶ Start':'▶ 开始','Ⅱ Pause':'Ⅱ 暂停','↺ Reset':'↺ 重置','Warm pads and soft bells fade in gently.':'柔和和弦与轻柔铃声会慢慢淡入。','Calm ambience fading in…':'轻柔音乐正在淡入…','Warm pads • soft bells • gentle air texture':'柔和和弦 • 轻柔铃声 • 舒缓背景音','Calm music is off.':'轻音乐已关闭。','Tap Start again to enable sound.':'再按一次“开始”以启用声音。','Time is up':'时间到！',

  'Transition Countdown':'过渡倒计时','Move safely and be ready.':'安全移动，准备就绪。','Change activity':'活动转换','Move safely • Be ready':'安全移动 • 准备就绪','Finish the transition before the countdown ends.':'在倒计时结束前完成转换。','♫ Music: On':'♫ 音乐：开','♫ Music: Off':'♫ 音乐：关','▶ Start transition':'▶ 开始转换','■ Stop':'■ 停止','Transition complete':'转换完成',

  'Attention Signal':'注意信号','A clear cue to stop, look and listen.':'清楚的提示，让大家停下、看老师、认真听。','Attention cue':'注意提示','Eyes here':'看这里','A short, predictable signal tells everyone when to stop, look and listen.':'简短而固定的信号，提醒大家停下、看老师、认真听。','🔔 Signal now':'🔔 发出提示',

  'Noise Level':'音量等级','Show pupils the voice level expected.':'让学生清楚知道应该使用什么音量。','Voice level':'说话音量','Silent':'安静','No talking':'不说话','Whisper':'耳语','Only the person beside you can hear':'只有身边的人听得到','Partner':'同伴','Talk to your partner':'和同伴轻声交谈','Group':'小组','Your group can hear you':'让同组同学听得到','Presentation':'分享','One voice for the whole class':'全班只听一个人的声音',

  'Sentence Starters':'句子开头','Simple ways to start an answer.':'帮助学生开始作答的简单句型。','Answer help':'作答支架','Choose a starter to help you begin your answer.':'选择一个句子开头，帮助你开始作答。','I think ___ because ___.':'我认为___，因为___。','One reason is ___.':'其中一个原因是___。','For example, ___.':'例如，___。','I know this because ___.':'我知道这一点，因为___。','This means that ___.':'这表示___。','I can tell that ___ because ___.':'我可以看出___，因为___。','So, ___.':'所以，___。','So, ___. ':'所以，___。',

  'Confidence Check':'学习信心','A safe way for pupils to show how learning is going.':'让学生安心表达目前的学习情况。','How is learning going?':'你现在学得怎么样？','Show 1–4 fingers':'举出 1–4 根手指','Hold up the number of fingers that matches how you feel.':'举出相应数量的手指，表示你现在的学习感受。','4 fingers maximum':'最多 4 根手指','I need help':'我需要帮助','Please support me':'请帮助我','I’m getting there':'我快掌握了','I need more practice':'我还需要多练习','I can do it':'我会做了','I can try independently':'我可以自己尝试','I can explain it':'我能解释','I can help someone else':'我可以帮助别人',

  'Pick a Pupil':'随机点名','Invite participation fairly from your class.':'公平地邀请班上学生参与。','Fair participation':'公平参与','Ready to choose':'准备点名','Everyone gets a fair chance. Pick without replacement until the round is complete.':'每个人都有公平机会。本轮点过的学生不会重复，直到全班轮完。','🎯 Pick a pupil':'🎯 随机点名','↺ New round':'↺ 新一轮','New round ready':'新一轮已准备',

  'Make Groups':'随机分组','Create random groups quickly from the class list.':'从班级名单快速随机分组。','Random grouping':'随机分组','Make groups':'进行分组','Names come from the class master sheet so the list stays consistent.':'名单来自班级总表，确保资料一致。','Group size':'每组人数','👥 Make groups':'👥 开始分组',

  'Brain Break':'伸展休息','A short reset before learning continues.':'短暂活动一下，再继续学习。','⚡ Brain Break ⚡':'⚡ 伸展休息 ⚡','March & Move':'原地踏步','March quietly on the spot.':'安静地原地踏步。','Reach for the Sky':'向上伸展','Reach both arms high, then relax. Keep moving!':'双手向上伸展，再放松。继续活动！','Balance Challenge':'平衡挑战','Balance on one foot. Switch halfway through.':'单脚站立保持平衡，中途换脚。','Shoulder Roll':'转动肩膀','Roll your shoulders slowly and loosen up.':'慢慢转动肩膀，让身体放松。','Star Jump Energy':'开合跳','Do gentle star jumps with plenty of space.':'保持足够空间，轻轻做开合跳。','Shake It Out':'甩一甩','Shake your hands and arms, then your legs.':'先甩甩手和手臂，再甩甩双腿。','Figure 8':'画 8 字','Trace a giant figure 8 in the air.':'用手在空中画一个大大的 8 字。','Touch Your Toes':'碰脚尖','Reach down toward your toes, then stand tall.':'向下伸手碰脚尖，然后站直。','🏃 Sporty beat on':'🏃 活力节拍：开','🔇 Sporty beat off':'🔇 活力节拍：关','♫ Sound On':'♫ 声音：开','🔇 Sound Off':'🔇 声音：关','🎲 Next':'🎲 下一个','← Main':'← 返回',

  'Reflect':'学习反思','Help pupils notice what supported their learning.':'帮助学生发现哪些方法促进了学习。','Learning reflection':'学习反思','Think quietly first. Then share, write or keep your answer in mind.':'先安静想一想，再选择分享、写下来或记在心里。','↻ Another prompt':'↻ 换一个问题','What did you learn?':'你学到了什么？','What was difficult?':'哪里最困难？','What helped you?':'什么方法帮助了你？','What are you more confident about now?':'你现在对什么更有信心？','What strategy worked for you?':'什么策略对你有效？','What will you try next time?':'下次你会尝试什么？',

  'Quote of the Day':'每日一句','Encouragement for pupils who find learning difficult.':'给学习有困难的学生一点鼓励。','✨ Today’s Encouraging Thought ✨':'✨ 今天的鼓励 ✨','One small step at a time. You can keep learning.':'一步一步来，你可以继续进步。','Preparing UK English voice…':'正在准备中文语音…','🔊 Read Again':'🔊 再读一次','⏸ Pause':'⏸ 暂停','⏹ Stop':'⏹ 停止','🎲 New Quote':'🎲 换一句','Text-to-speech is not available in this browser.':'这个浏览器不支持朗读功能。','Tap Read Again if automatic speech was blocked.':'如果自动朗读被阻止，请按“再读一次”。',

  'You do not have to understand everything at once. Learn one step at a time.':'你不必一次弄懂所有东西。一步一步学就好。',
  'Slow progress is still progress. Keep the next step small and clear.':'进步慢一点也是进步。把下一步做得小而清楚。',
  'Not knowing yet is the beginning of learning.':'“还不会”正是学习的开始。',
  'A hard question is not a stop sign. Try a different strategy.':'难题不是停止的信号。换一种方法试试看。',
  'Your first answer does not need to be perfect. It only needs to get you started.':'第一次作答不需要完美，只需要让你开始思考。',
  'Mistakes show you what to work on next.':'错误会告诉你下一步该练习什么。',
  'When one way does not work, change the way — not the goal.':'一种方法不行，就换方法，不必放弃目标。',
  'Ask for help when you need it. Strong learners do.':'需要时主动求助，也是优秀学习者会做的事。',
  'You can learn difficult things by breaking them into smaller parts.':'把困难的内容分成小部分，你就能一步步学会。',
  'Today, aim to understand one thing better than yesterday.':'今天只要比昨天多弄懂一件事，就是进步。',
  'Getting stuck does not mean you cannot learn it. It means you need a next move.':'卡住不代表你学不会，只表示你需要找下一步。',
  'Try, check, change, and try again. That is learning.':'尝试、检查、调整，再试一次——这就是学习。',
  'You are allowed to take your time. Keep thinking.':'你可以慢慢来，继续思考。',
  'One careful step is better than rushing through ten.':'认真走好一步，比匆忙做十步更重要。',
  'If the work feels hard, choose one part you can do first.':'如果任务很难，先从你会做的一小部分开始。',
  'Every time you correct a mistake, your understanding gets stronger.':'每改正一个错误，你的理解就更扎实。',
  'You do not need to be the fastest learner. You need to keep learning.':'你不需要学得最快，只需要继续学习。',
  'A small success today can become confidence tomorrow.':'今天的小成功，会变成明天的信心。',
  'Say what you know first. Then work out what is missing.':'先说出你已经知道的，再找出还缺什么。',
  'When you feel unsure, use a strategy instead of giving up.':'不确定时，先用一个策略，而不是放弃。',
  'Learning can feel difficult before it starts to feel familiar.':'学习在变熟悉之前，常常会先觉得困难。',
  'Compare your work with your last attempt, not with someone else’s.':'把这次的自己和上一次比较，不必和别人比较。',
  'You can pause, think, and try again.':'你可以停一下、想一想，再试一次。',
  'A question you ask today can unlock something tomorrow.':'今天提出的一个问题，可能会打开明天的理解。',
  'Keep the parts you understand and work on one confusing part at a time.':'保留你已经懂的部分，每次只解决一个不明白的地方。',
  'Effort helps most when you also change your strategy.':'努力很重要，懂得调整策略会让努力更有效。',
  'You have learnt hard things before. Use the same patience again.':'你以前也学会过困难的东西，再用一次同样的耐心。',
  'Read it again. Draw it. Say it. Try another way.':'再读一次、画一画、说一说，再换一种方法。',
  'Being confused is a signal to slow down and look for the next clue.':'感到困惑时，就放慢速度，寻找下一个线索。',
  'You do not have to get it right immediately to get better at it.':'不必马上答对，你仍然可以越来越进步。',
  'Keep going until the next small step makes sense.':'继续尝试，直到下一小步变得清楚。',

  'Class Organisation':'班级管理','One master pupil sheet → duty rosters, groups, roles, CCA and dismissal views':'一张学生总表 → 值日、分组、职务、CCA 与放学安排','📋 Master Pupil Sheet':'📋 学生总表','＋ Add pupil':'＋ 添加学生','↻ Sync class list':'↻ 同步班级名单','⬆ Import CSV':'⬆ 导入 CSV','⬇ Download CSV':'⬇ 下载 CSV','Clear filters':'清除筛选','Index No.':'序号','Pupil':'学生','Group':'小组','Duty Day':'值日日期','Duty Responsibility':'值日任务','Class Role':'班级职务','Special Role':'特别职务','CCA':'CCA','Dismissal Mode':'放学方式','Dismissal Detail':'放学详情','All days':'所有日期','All groups':'所有小组','All duties':'所有值日任务','All roles':'所有职务','All CCAs':'所有 CCA','All dismissal':'所有放学方式','All responsibilities':'所有任务','All dismissal modes':'所有放学方式','⬇ Filtered CSV':'⬇ 下载筛选后的 CSV','🧹 Duty Roster':'🧹 值日表','👥 Groups':'👥 小组','🪪 Roles':'🪪 职务','🏅 CCA':'🏅 CCA','🚪 Dismissal':'🚪 放学安排','📋 All Pupils':'📋 全体学生','Organise by group':'按小组整理','Individual pupils':'按学生显示',
  'Search pupil, role, CCA, dismissal…':'搜索学生、职务、CCA、放学安排…',
  'CSV columns: Index No., Pupil, Group, Duty Day, Duty Responsibility, Class Role, Special Role, CCA, Dismissal Mode, Dismissal Detail. Use semicolons if a pupil has more than one role/CCA.':'CSV 栏目：序号、学生、小组、值日日期、值日任务、班级职务、特别职务、CCA、放学方式、放学详情。若同一学生有多个职务或 CCA，请用分号分隔。',

  'Daily Duty Roster':'每日值日表','Everyone knows how to help the class today.':'让每个人都清楚今天如何为班级出一份力。','Edit duties':'编辑值日','Classroom responsibilities':'班级责任','No duties assigned':'尚未安排值日任务','Add Duty Day and Duty Responsibility in Class Organisation.':'请在“班级管理”中填写值日日期和值日任务。','🗂️ Edit duties in Class Organisation':'🗂️ 到班级管理编辑值日任务',
  'Monday':'星期一','Tuesday':'星期二','Wednesday':'星期三','Thursday':'星期四','Friday':'星期五','Mon':'一','Tue':'二','Wed':'三','Thu':'四','Fri':'五','Monday Duties':'星期一值日','Tuesday Duties':'星期二值日','Wednesday Duties':'星期三值日','Thursday Duties':'星期四值日','Friday Duties':'星期五值日','Weekend preview • Monday':'周末预览 • 星期一',

  'Reward Points':'奖励积分','Pupil Reward Points':'学生奖励积分','Group Reward Points':'小组奖励积分','Recognise positive learning behaviours quickly.':'及时肯定积极的学习行为。','Positive reinforcement':'正向鼓励','Tap a pupil, award points, and keep the momentum visible.':'点选学生并给予积分，让正向表现清楚可见。','Reward teamwork and make positive group effort visible.':'奖励团队合作，让小组的积极表现清楚可见。','⭐ Pupil points':'⭐ 学生积分','🏆 Group points':'🏆 小组积分','Index order':'按序号','Name A–Z':'按姓名','Highest points':'最高积分','↶ Undo':'↶ 撤销','Reset points':'重置积分','No pupils found':'找不到学生','No groups found':'找不到小组','Add pupils in Class Organisation first.':'请先在“班级管理”中添加学生。','Assign pupils to groups in Class Organisation first.':'请先在“班级管理”中为学生安排小组。','Search pupil':'搜索学生','Search group':'搜索小组','Nothing to undo':'没有可撤销的操作','Points reset':'积分已重置','Class Organisation':'班级管理',

  'Daily Visual Timetable':'每日视觉课表','Make today predictable and easy to follow.':'让今天的流程清楚、可预期、容易跟随。','Today at a glance':'今日流程','What happens next?':'接下来做什么？','A clear sequence can make the day feel more predictable.':'清楚的顺序能让一天更容易掌握。','＋ Add item':'＋ 添加项目','▣ Pupil view':'▣ 学生模式',

  'No class yet.':'还没有班级。','＋ Add class':'＋ 添加班级','Allow pop-ups to add a class':'请允许弹出式窗口以添加班级','Add a class or pupils in Class Organisation first.':'请先在“班级管理”中添加班级或学生。','Add pupils first':'请先添加学生',
  'Class response cue':'全班回应提示','There is no wrong choice. This helps the teacher know what support you need.':'没有错误的选择。这能帮助老师了解你需要什么支持。','Show where you are now':'表示你现在的学习情况',

  'Who?':'谁？','What?':'什么？','When?':'什么时候？','Where?':'哪里？','Why?':'为什么？','How?':'怎样？','Explain':'解释','Compare':'比较','Predict':'预测','What if…?':'如果……会怎样？','What evidence?':'有什么证据？','Give a reason':'说出一个理由','How do you know?':'你怎么知道？','Describe':'描述','Thinking prompt':'思考提示','Use the prompt to explain your thinking, not just give an answer.':'用提示句解释你的想法，不只是给出答案。','↻ Spin a question':'↻ 随机选问题','Use this prompt':'使用这个问题',

  'Short reset':'短暂休息','Move safely. Stop if anything feels uncomfortable.':'安全活动。如果身体不舒服，请立即停止。','▶ Start 30 sec':'▶ 开始 30 秒','↻ Another break':'↻ 换一个活动','Ready to learn again':'准备继续学习',
  '10 shoulder rolls':'转肩 10 次','Reach high, then touch your toes':'向上伸展，再碰脚尖','Stand and stretch for 20 seconds':'站起来伸展 20 秒','5 slow star jumps':'慢慢做 5 次开合跳','Shake out your hands and legs':'甩甩双手和双腿','March quietly on the spot':'安静地原地踏步','Take 5 slow breaths':'慢慢深呼吸 5 次','Stretch your arms wide, then relax':'张开双臂伸展，然后放松'
,
  "Saved classes:":"已保存的班级：",
  "✏️ Rename Class Timetable":"✏️ 重命名班级课表",
  "⬇ Export Selected Class":"⬇ 导出所选班级",
  "⬆ Import Selected Class":"⬆ 导入单个班级",
  "⬇ Export All":"⬇ 导出全部",
  "⬆ Import All":"⬆ 导入全部",
  "Add another class by pasting its timetable screenshot and saving under a new class name.":"粘贴另一班级的课表截图，并使用新班级名称保存，即可添加班级。",
  "No timetables yet":"尚无已保存的课表"
}));

function compact(s){return String(s??'').replace(/\s+/g,' ').trim()}
function translateString(input){
  const raw=String(input??''),s=compact(raw);if(!s)return raw;
  if(EXACT.has(s))return EXACT.get(s);
  let m;
  if((m=s.match(/^(\d+(?:\.\d+)?) min$/)))return `${m[1]} 分钟`;
  if((m=s.match(/^(\d+) sec$/)))return `${m[1]} 秒`;
  if((m=s.match(/^(\d+) fingers?$/)))return `${m[1]} 根手指`;
  if((m=s.match(/^Class: (.+)$/)))return `班级：${m[1]}`;
  if((m=s.match(/^(\d+) pupils? loaded from (.+)\.$/)))return `已从 ${m[2]} 载入 ${m[1]} 名学生。`;
  if((m=s.match(/^(\d+) left in this round$/)))return `本轮还剩 ${m[1]} 人`;
  if((m=s.match(/^Group (\d+)$/)))return `第 ${m[1]} 组`;
  if((m=s.match(/^View (Monday|Tuesday|Wednesday|Thursday|Friday)$/)))return `查看${EXACT.get(m[1])}`;
  if((m=s.match(/^No (Monday|Tuesday|Wednesday|Thursday|Friday) duties are assigned for (.+)\. Add them in Class Organisation\.$/)))return `${m[2]} 的${EXACT.get(m[1])}尚未安排值日任务。请到“班级管理”中添加。`;
  if((m=s.match(/^(\d+) pupils? • (\d+) responsibilities?$/)))return `${m[1]} 名学生 • ${m[2]} 项任务`;
  if((m=s.match(/^(.+): (\d+) points$/)))return `${m[1]}：${m[2]} 分`;
  if((m=s.match(/^Undid last change for (.+)$/)))return `已撤销 ${m[1]} 的上一次更改`;
  if((m=s.match(/^Reset all pupil points for (.+) to 0\?$/)))return `要把 ${m[1]} 全体学生的积分重置为 0 吗？`;
  if((m=s.match(/^Reset all group points for (.+) to 0\?$/)))return `要把 ${m[1]} 所有小组的积分重置为 0 吗？`;
  if((m=s.match(/^Voice: (.+)$/)))return `语音：${m[1]}`;
  if(s==='UK English voice preference enabled')return '已启用中文语音偏好';
  return raw;
}

function translateNode(node){
  if(!node)return;
  if(node.nodeType===3){
    const p=node.parentElement;if(!p||/^(SCRIPT|STYLE|NOSCRIPT|CODE|PRE)$/i.test(p.tagName))return;
    const before=node.nodeValue,trim=compact(before);if(!trim)return;const after=translateString(trim);if(after!==trim){const lead=before.match(/^\s*/)?.[0]||'',trail=before.match(/\s*$/)?.[0]||'';node.nodeValue=lead+after+trail}
    return;
  }
  if(node.nodeType!==1)return;
  const el=node;
  if(el.tagName==='OPTION'&&!el.hasAttribute('value'))el.setAttribute('value',compact(el.textContent));
  for(const attr of ['placeholder','title','aria-label'])if(el.hasAttribute(attr)){const v=el.getAttribute(attr),t=translateString(v);if(t!==v)el.setAttribute(attr,t)}
  for(const child of [...el.childNodes])translateNode(child);
}

function remapUrl(raw){
  if(!raw)return raw;
  try{
    const u=new URL(String(raw),'https://limkimsze-maker.github.io/Classroom-Companion/');
    if(u.origin!==location.origin||!u.pathname.startsWith('/Classroom-Companion/'))return raw;
    const file=u.pathname.split('/').pop()||'';
    if(file==='index.html'||file==='widget-launch.html'||file==='teacher-bookmark.html'||file==='')return new URL('./',location.href).href;
    if(file==='support-tool.html'){
      const tool=u.searchParams.get('tool')||'timer-calm-music';return new URL('support-tool.html?tool='+encodeURIComponent(tool),location.href).href;
    }
    const allowed=['class-organisation.html','daily-duty-roster.html','reward-points.html','configure.html','quote.html','brain-break.html','clock.html'];
    if(allowed.includes(file))return new URL('page.html?src='+encodeURIComponent(file+u.search),location.href).href;
    return raw;
  }catch(e){return raw}
}

function patchSpeech(w){
  try{
    const synth=w.speechSynthesis;if(!synth||synth.__ccChinesePatched)return;synth.__ccChinesePatched=true;
    const original=synth.speak.bind(synth);synth.speak=function(u){try{const t=translateString(u.text||'');if(t!==u.text)u.text=t;if(/[\u3400-\u9fff]/.test(u.text||'')){u.lang='zh-CN';u.rate=Math.min(Number(u.rate)||1,.9);const voices=synth.getVoices?.()||[];u.voice=voices.find(v=>/^zh[-_](CN|SG)$/i.test(v.lang||''))||voices.find(v=>/^zh/i.test(v.lang||''))||u.voice}}catch(e){}return original(u)};
  }catch(e){}
}

function patchWindow(frame){
  let w,d;try{w=frame.contentWindow;d=frame.contentDocument}catch(e){return}if(!w||!d)return;
  try{d.documentElement.lang='zh-SG';d.body&&d.body.style.setProperty('font-family','"Noto Sans SC","Microsoft YaHei","PingFang SC",Inter,system-ui,sans-serif','important')}catch(e){}
  patchSpeech(w);
  try{const oldConfirm=w.confirm.bind(w);w.confirm=msg=>oldConfirm(translateString(msg));const oldAlert=w.alert?.bind(w);if(oldAlert)w.alert=msg=>oldAlert(translateString(msg))}catch(e){}
  try{
    if(!w.__ccChineseOpenPatched){w.__ccChineseOpenPatched=true;const oldOpen=w.open.bind(w);w.open=function(url,name,features){return oldOpen(remapUrl(url),name,features)}}
  }catch(e){}
  try{
    d.addEventListener('click',ev=>{
      const el=ev.target?.closest?.('button,a');if(!el)return;const id=el.id||'';
      if(['closeBtn','close'].includes(id)){ev.preventDefault();ev.stopImmediatePropagation();try{window.top.close()}catch(e){};return}
      if(id==='mainBtn'){ev.preventDefault();ev.stopImmediatePropagation();try{window.top.close()}catch(e){};return}
      if(['editBtn','editBottom'].includes(id)&&/daily-duty-roster|reward-points/.test(w.location.pathname)){ev.preventDefault();ev.stopImmediatePropagation();location.href='page.html?src='+encodeURIComponent('class-organisation.html')+'&v='+Date.now();return}
      if(el.tagName==='A'&&el.href){const mapped=remapUrl(el.href);if(mapped!==el.href)el.href=mapped}
    },true);
  }catch(e){}
}

function attach(frame){
  let d;try{d=frame.contentDocument}catch(e){return}if(!d)return;
  patchWindow(frame);
  if(d.title){const t=translateString(d.title.replace(/\s*•\s*Classroom Companion\s*$/,''));if(t!==d.title)d.title=t+' • 课堂小助手';}
  translateNode(d.body||d.documentElement);
  try{
    const obs=new MutationObserver(list=>{for(const m of list){if(m.type==='characterData')translateNode(m.target);else for(const n of m.addedNodes)translateNode(n)}});obs.observe(d.documentElement,{subtree:true,childList:true,characterData:true});
  }catch(e){}
  setTimeout(()=>translateNode(d.body||d.documentElement),80);
  setTimeout(()=>translateNode(d.body||d.documentElement),350);
  setTimeout(()=>translateNode(d.body||d.documentElement),900);
}

window.CCChinese={attach,translateString};
})();