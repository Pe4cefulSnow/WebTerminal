let usrName = 'CTF'
let nowPosition = '~'
let commandList = 'cat 用户,cat gift,pwd,play ctf,ll,ls -ll,cd ,info,cd /,cd ~,cd ..,cd /root,cd,cat flag,cat date,cat prize,cat activity,whoami,ls,cat,logout,hey,hi,hello,help,clear,~,/,./'.split(',')
let hisCommand = []
let cour = 0
let isInHis = 0
let directory = []
let files = []

let host = 'http://121.42.167.55:3007'

let e_main = $('#main')
let e_input = $('.input-text')
let e_html = $('body,html')
let e_pos = $('#pos')

let mainFunc = (input, position) => {
  if (input === '') {
    e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + '<br/>')
    e_html.animate({ scrollTop: $(document).height() }, 0)
  } else {
    command = input
    if (commandList.indexOf(command) === -1) {
      e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + 'zsh: command not found: ' + command + '<br/>')
      e_html.animate({ scrollTop: $(document).height() }, 0)
    } else {
      switch (command) {
        case 'help':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + '[sudo ]command[ Options...]<br/>You can use following commands:<br/></br>whoami&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[See who we are]<br/>ls&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[List the files]<br/>cat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[View file contents]<br/>clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Clear screen]<br/>play ctf&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[To play 用户CTF]<br/><br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'play ctf':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>Let\'s play 用户CTF~<br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          window.open("http://110.42.184.89:8001/challenges")
          break
        case 'hi':
        case 'hey':
        case 'hello':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>Nice to Meet U : )<br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'cat flag':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>flag{KFC_crazy4_Vme50yuan!}<br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'cat gift':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/><font color="blue">Exactly,I will give you some gitfs:</font><br/>https://buuoj.cn/</br>https://ctf.show/</br>https://adworld.xctf.org.cn/</br>https://www.ctfer.vip/</br>https://www.ctfhub.com/')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'cat 用户':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>用户 Forbidden<br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'cat activity':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>用户网络安全实验室旨在学习、研究和交流切磋安全技术，营造良好的安全技术交流学习氛围，创建属于我们自己的安全技术学习小组，我们只是一群有趣的人在一起做有意思的事。<br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'whoami':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/><div class="d"><a href="javascript:void(0);" class="a">我们是用户安全团队</a></div><br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'pwd':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>/ddw/Orz<br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'clear':
          e_main.html('')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'ls':
        case 'ls -ll':
        case 'll':
          // dir: /dir/
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + 'There are some files that you can see,try to cat it:<br/></br>-rw-r--r-- <font color="yellow">CTF CTF</font> gift<br/>-rw-r--r-- <font color="yellow">CTF CTF</font> activity<br/>-rw-r--r--  <font color="yellow">CTF CTF</font> 用户<br/>-rw-r--r--  <font color="yellow">CTF CTF</font> flag</br><br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'cat':
          file = input.split(' ')[1]
          $.ajax({
            url: host + '/cat',
            data: { filename: file, dir: position.replace('~', '') + '/' },
            dataType: 'jsonp',
            success: (res) => {
              if (res.code === 0) {
                e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + res.data.replace(/\n/g, '<br/>') + '<br/>')
                e_html.animate({ scrollTop: $(document).height() }, 0)
              } else if (res.code === 404) {
                e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + res.message + '<br/>')
                e_html.animate({ scrollTop: $(document).height() }, 0)
              }
            }
          })
          break
        case 'info':
          // dir: /dir/
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + '</br></br><div class="logo1">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#</div><div class="logo1">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="logo-title">The name of the team:</span><span style="color: #fff"> Hat Trick 用户网络安全实验室</span></div><div class="logo1">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="logo1">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="logo-title">Location:</span><span style="color: #fff"> 计算机楼106</span></div><div class="logo2">&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="logo2">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="logo-title">Declaration:</span><span style="color: #fff"> 网络安全靠人民,网络安全为人民。</span></div><div class="logo2">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
          e_main.html($('#main').html() + '<div class="logo3">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="logo-title">Direction:</span><span style="color: #fff"> 物联网安全、组队攻防、漏洞挖掘、密码学、逆向工程</span></div><div class="logo3">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="logo4">&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;#&nbsp;&nbsp;#&nbsp;#&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="logo-title">Creation time:</span><span style="color: #fff"> 2013</span></div><div class="logo4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="logo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="logo-title">Words:</span><span style="color: #fff"> 秋叶飘落的那一刻，亦是我们相遇的时候，我们期待与你相遇</span></div><div class="logo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="logo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>')
          e_main.html($('#main').html() + '<div class="logo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="logo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="logo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class="logo5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'cd':
        case 'cd ..':
        case 'cd /':
        case 'cd /root':
        case 'cd ~':
        case 'cd ':
          e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/><font color="red" size="3">不许乱翻>_<</br>You can only in this directory,haha</font><br/>')
          e_html.animate({ scrollTop: $(document).height() }, 0)
          break
        case 'cd000000':
          // nowPosition: ~/dir/dir
          if (!input.split(' ')[1] || input.split(' ')[1] === '~' || input.split(' ')[1] === '~/') {
            // 回退到主目录：cd || cd ~ || cd ~/
            nowPosition = '~'
            e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>')
            e_html.animate({ scrollTop: $(document).height() }, 0)
            e_pos.html(nowPosition)
          } else {
            // 切换到其他目录
            if (nowPosition === '~') {
              // 用户在主目录：cd ~/dir || cd ./dir || cd dir
              dir = input.split(' ')[1].replace('./', '').replace('~/', '') + '/'
              $.ajax({
                url: host + '/cd',
                data: { dir, pos: nowPosition.replace('~', '') + '/' },
                dataType: 'jsonp',
                success: (res) => {
                  if (res.code === 0) {
                    nowPosition = '~/' + dir.substring(0, dir.length - 1)
                    e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>')
                    e_html.animate({ scrollTop: $(document).height() }, 0)
                    e_pos.html(nowPosition)
                  } else if (res.code === 404) {
                    e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + res.message + '<br/>')
                    e_html.animate({ scrollTop: $(document).height() }, 0)
                  }
                }
              })
            } else {
              // 用户在二级目录：cd .. || cd ../ || cd ../dir || cd dir || cd ./dir
              dir = input.split(' ')[1].replace(/\.\.\//g, '')

              let backCount = 0 // 回退层级
              if (dir === '' || dir === '..') {
                // 情境一：回退到上一级：cd .. || cd ../
                if (dir === '..') {
                  backCount = 1
                } else {
                  // 回退多级：cd ../../
                  backCount = input.split(' ')[1].match(/\.\.\//g) && input.split(' ')[1].match(/\.\.\//g).length || 0
                }
                let pos = nowPosition.split('/') // [~, blog, img]
                nowPosition = pos.slice(0, pos.length - backCount) // [~, blog]
                nowPosition = nowPosition.join('/') // ~/blog

                e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>')
                e_html.animate({ scrollTop: $(document).height() }, 0)
                e_pos.html(nowPosition)
              } else {
                // 情境二：切换到绝对路径的其他层级：cd ~/dir
                if (dir.startsWith('~/')) {
                  dir = input.split(' ')[1].replace('~/', '') + '/'
                  $.ajax({
                    url: host + '/cd',
                    data: { dir, pos: '/' },
                    dataType: 'jsonp',
                    success: (res) => {
                      if (res.code === 0) {
                        nowPosition = '~/' + dir.substring(0, dir.length - 1)
                        e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>')
                        e_html.animate({ scrollTop: $(document).height() }, 0)
                        e_pos.html(nowPosition)
                      } else if (res.code === 404) {
                        e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + res.message + '<br/>')
                        e_html.animate({ scrollTop: $(document).height() }, 0)
                      }
                    }
                  })
                } else {
                  // 情境三：切换为相对路径的其他层级：cd dir || cd ./dir || cd ../dir
                  // pos: /dir/
                  let pos = '/' + nowPosition.replace('~/', '') + '/'
                  let backCount = input.split(' ')[1].match(/\.\.\//g) && input.split(' ')[1].match(/\.\.\//g).length || 0

                  pos = nowPosition.split('/') // [~, blog, img]
                  nowPosition = pos.slice(0, pos.length - backCount) // [~, blog]
                  nowPosition = nowPosition.join('/') // ~/blog

                  pos = '/' + nowPosition.replace('~', '').replace('/', '')  + '/'
                  dir = dir + '/'
                  dir = dir.startsWith('./') && dir.substring(1) || dir // 适配：cd ./dir
                  $.ajax({
                    url: host + '/cd',
                    data: { dir, pos },
                    dataType: 'jsonp',
                    success: (res) => {
                      if (res.code === 0) {
                        nowPosition = '~' + pos + dir.substring(0, dir.length - 1) // ~/blog/img
                        e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>')
                        e_html.animate({ scrollTop: $(document).height() }, 0)
                        e_pos.html(nowPosition)
                      } else if (res.code === 404) {
                        e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + position + ']% ' + input + '<br/>' + res.message + '<br/>')
                        e_html.animate({ scrollTop: $(document).height() }, 0)
                      }
                    }
                  })
                }
              }
            }
          }
          break;
      }
    }
  }
}

// 命令自动补全
let pressTab = (input) => {
  if (input !== '') {
    command = input.split(' ')[0]
    if (command === 'l') e_input.val('ls')
    if (command === 'c') {
      e_main.html($('#main').html() + '[<span id="usr">' + usrName + '</span>@<span class="host">用户</span> ' + nowPosition + ']% ' + input + '<br/>cat&nbsp;&nbsp;cd&nbsp;&nbsp;claer<br/>')
    }

    if (command === 'ca') e_input.val('cat')
    if (command === 'cl' || command === 'cle' || command === 'clea') e_input.val('clea')

    // cd 命令自动补全：只适配目录
    if (input.split(' ')[1] && command === 'cd') {
      dir = input.split(' ')[1]
      let prefix = ''
      if (nowPosition === '~') {
        // 用户在主目录
        if (dir.startsWith('./')) {
          prefix = './'
          dir = dir.replace('./', '')
        }
        if (dir.startsWith('~/')) {
          prefix = '~/'
          dir = dir.replace('~/', '')
        }

        // 路径最短匹配
        directory.every(i => {
          if (i.startsWith(dir)) {
            e_input.val('cd ' + prefix + i)
            return false
          }
          return true
        })
      } else {
        // 用户在二级目录或更深层目录
        let pos = nowPosition.replace('~/', '') + '/'

        if (dir.startsWith('~/')) {
          prefix = '~/'
          dir = dir.replace('~/', '')

          // 路径最短匹配
          directory.every(i => {
            if (i.startsWith(dir)) {
              e_input.val('cd ' + prefix + i)
              return false
            }
            return true
          })
        } else {
          if (dir.startsWith('./')) {
            prefix = './'
            dir = dir.replace('./', '')
          }

          // 路径最短匹配
          directory.every(i => {
            if (i.startsWith(pos + dir)) {
              i = i.replace(pos, '')
              e_input.val('cd ' + prefix + i)
              return false
            }
            return true
          })
        }
      }
    }

    // cat 命令自动补全：只适配文件
    if (input.split(' ')[1] && command === 'cat') {
      file = input.split(' ')[1]
      let pos = nowPosition.replace('~', '').replace('/', '') // 去除主目录的 ~ 和其他目录的 ~/ 前缀
      let prefix = ''

      if (file.startsWith('./')) {
        prefix = './'
        file = file.replace('./', '')
      }

      if (nowPosition === '~') {
        files.every(i => {
          if (i.startsWith(pos + file)) {
            e_input.val('cat ' + prefix + i)
            return false
          }
          return true
        })
      } else {
        pos = pos + '/'
        files.every(i => {
          if (i.startsWith(pos + file)) {
            e_input.val('cat ' + prefix + i.replace(pos, ''))
            return false
          }
          return true
        })
      }
    }
  }
}

window.onresize = function () {
  e_input.width($(document).width() - $('.prefix').width() - 160)
};

let historyCmd = (k) => {
  $('body,html').animate({ scrollTop: $(document).height() }, 0)

  if (k !== 'up' || isInHis) {
    if (k === 'up' && isInHis) {
      if (cour >= 1) {
        cour--
        e_input.val(hisCommand[cour])
      }
    }
    if (k === 'down' && isInHis) {
      if (cour + 1 <= hisCommand.length - 1) {
        cour++
        $(".input-text").val(hisCommand[cour])
      } else if (cour + 1 === hisCommand.length) {
        $(".input-text").val(inputCache)
      }
    }
  } else {
    inputCache = e_input.val()
    e_input.val(hisCommand[hisCommand.length - 1])
    cour = hisCommand.length - 1
    isInHis = 1
  }
}

$(document).bind('keydown', function (b) {
  e_input.focus()
  if (b.keyCode === 13) {
    e_main.html($('#main').html())
    e_html.animate({ scrollTop: $(document).height() }, 0)
    mainFunc(e_input.val(), nowPosition)
    hisCommand.push(e_input.val())
    isInHis = 0
    e_input.val('')
  }
  if (b.keyCode === 9) {
    pressTab(e_input.val())
    b.preventDefault()
    e_html.animate({ scrollTop: $(document).height() }, 0)
    e_input.focus()
  }

  if (b.keyCode === 38) historyCmd('up')
  if (b.keyCode === 40) historyCmd('down')

  // Ctrl + U 清空输入快捷键
  if (b.keyCode === 85 && b.ctrlKey === true) {
    e_input.val('')
    e_input.focus()
  }
})

$(document).ready(() => {
  // 初始化目录和文件
  $.ajax({
    url: host + '/list',
    data: { dir: '/' },
    dataType: 'jsonp',
    success: (res) => {
      if (res.code === 0) {
        directory = res.data.directory
        directory.shift(); // 去掉第一个 ~
        files = res.data.files
        console.log(res.data)
      }
    }
  })
})