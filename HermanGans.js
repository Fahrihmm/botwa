const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = false

//nocache
require('./CalMeHerman.js')
nocache('../CalMeHerman.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync('FAHRIHMM', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ GO 1K SUBSCRIBE ]\n', 'yellow'), color('Subscribe YT FAHRIHMM', 'yellow'))
	console.log(color('GA SUBSCRIBE BAKAL EROR:V', 'pink'))
	console.log(color('\n\n[ FOLOW IG @MuriofficialXD ]', 'red'))
	dha.browserDescription = ["MURIOFFICIALXD", "Chrome", "3.0.0"];

	// Menunggu QR
	dha.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCAN KODE QR BY FAHRIHMM 20CSECOND!'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && dha.loadAuthInfo(`./${setting.sessionName}.json`)
	dha.on('connecting', () => {
		console.log(color('[ FAHRIHMM ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "Y",
    "YO",
    "YOU",
    "YOUT",
    "YOUTUB",
    "YOUTUBE F",
    "YOUTUBE FA",
    "YOUTUBE FAH",
    "YOUTUBE FAHR",
    "YOUTUBE FAHRI",
    "YOUTUBE FAHRIH",
    "YOUTUBE FAHRIHM",
    "YOUTUBE FAHRIHMM J",
    "YOUTUBE FAHRIHMM JA",
    "YOUTUBE FAHRIHMM JAN",
    "YOUTUBE FAHRIHMM JAN L",
    "YOUTUBE FAHRIHMM JAN LU",
    "YOUTUBE FAHRIHMM JAN LUP",
    "YOUTUBE FAHRIHMM JAN LUPA",
    "YOUTUBE FAHRIHMM JAN LUPA S",
    "YOUTUBE FAHRIHMM JAN LUPA SU",
    "YOUTUBE FAHRIHMM JAN LUPA SUB",
    "YOUTUBE FAHRIHMM JAN LUPA SUBS",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSC",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCR",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRI",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIB",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE G",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K S",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SU",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUB",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS N",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS NG",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS NGA",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS NGAB",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS NGAB B",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BS",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BSA",
    "YOUTUBE FAHRIHMM JAN LUPA SUBSCRIBE GO 1K SUBS NGAB BSA LH",
  ]}

	//connect
	dha.on('open', () => {
		console.log(color('[ FAHRIHMM ]', 'yellow'), color('BOT SUDAH AKTIF'));
	})

	// session
	await dha.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dha.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'sedang dicas✅⚡') charging = true
		if (json[2][0][1].live == 'sedang tidak dicas❌🔌') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	dha.on('group-participants-update', async (anu) => {
		await welcome(dha, anu)
	})

	dha.on('chat-update', async (message) => {
		require('./CalMeHerman.js')(dha, message)
	})
}

starts()