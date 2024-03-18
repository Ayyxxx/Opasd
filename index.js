const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1213850034056069208/1215175259301486643/ay4.gif?ex=65fbcb26&is=65e95626&hm=fa2c3c2e1fe0c14bc78d3aa497859c9f2ba49cc16e35b4844f3e34fe590f34f6&=',
    'https://media.discordapp.net/attachments/1213850034056069208/1215175259830095882/ay.gif?ex=65fbcb26&is=65e95626&hm=47b460eed3397559abac621e24a4de9f82fa82f3af0d06ba680d397147f77826&=',
    'https://media.discordapp.net/attachments/1213850034056069208/1215175260605784085/ay2.gif?ex=65fbcb26&is=65e95626&hm=33c7c01de468ea1822f07906f4af8d4c31ff33954bcfab9836d94dcf3cd52fbb&=',
    'https://media.discordapp.net/attachments/1213850034056069208/1215175262216392764/ay3.gif?ex=65fbcb27&is=65e95627&hm=4ab7bc64aededc8acb4e628babd0cf374118ee09881d95b1f4c7bbb8e22f5ac8&='
    // Add more large image URLs as needed
];

const stateTexts = [
    'ﮩ٨ـﮩﮩ٨ـ รับรันบอทราคาถูก ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับกดเเอพพรีเมียม ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับรันดักซอง ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ มีเเจกของฟรี 100+ ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ มีบอทให้ใช้ฟรี ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับรันเม็ดม่วง ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับรันดักซอง ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับบูสดิสราคาถูก ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รหัสติดไนโตรถูกๆ ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับรันบอทราคาถูก ﮩ٨ـﮩﮩ٨ـ'
    // Add more state texts as needed
];

const nameTexts = [
    'ﮩ٨ـﮩﮩ٨ـ รับรันบอทราคาถูก ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับกดเเอพพรีเมียม ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับรันดักซอง ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ มีเเจกของฟรี 100+ ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ มีบอทให้ใช้ฟรี ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับรันเม็ดม่วง ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับรันดักซอง ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับบูสดิสราคาถูก ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รหัสติดไนโตรถูกๆ ﮩ٨ـﮩﮩ٨ـ',
    'ﮩ٨ـﮩﮩ٨ـ รับรันบอทราคาถูก ﮩ٨ـﮩﮩ٨ـ'
    // Add more state texts as needed
];

let currentStateIndex = 0; // Index to track the current state text

let currentLargeImageIndex = 0;

let currentnameTextsIndex = 0;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

client.on("ready", async () => {
    var startedAt = Date.now();
    console.log(`${client.user.username} เม็ดม่วงทำงานเรียบร้อยแล้ว !`);

    setInterval(() => {
        const currentTime = getCurrentTime();
        const currentDate = getCurrentDate();

        const r = new Discord.RichPresence()
            .setApplicationId('1121867777867788309')
            .setType('STREAMING')
            .setURL('https://www.youtube.com/watch?v=RMo3SR1G1yg&list=RDRMo3SR1G1yg&start_radio=1')
            .setState(stateTexts[currentStateIndex])
            .setName(nameTexts[currentnameTextsIndex])
            .setDetails(` ≽ ^ • ⩊ • ^ ≼ `)
            .setStartTimestamp(startedAt)
            .setAssetsLargeText(`・┆✦ʚ 📅 ${currentDate}  ♡  ⌚${currentTime} ɞ✦ ┆・`)
            .setAssetsLargeImage(largeImages[currentLargeImageIndex])
            .setAssetsSmallText('A$t๏r 🖤')
            .addButton('เข้าดิส', 'https://discord.gg/fakelinkclub')


        client.user.setActivity(r);

        currentLargeImageIndex = (currentLargeImageIndex + 1) % largeImages.length;
        currentStateIndex = (currentStateIndex + 1) % stateTexts.length;
        currentnameTextsIndex = (currentnameTextsIndex + 1) % nameTexts.length;
    }, 2500); // Change large image and state text every 1 second
});

function getCurrentDate() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = a.toLocaleDateString("en-US", c);
    const [month, day, year] = formattedDate.split('/');
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", hour: "numeric", minute: "numeric", hour12: false };
    return a.toLocaleTimeString("th-TH", c);
}

client.login(process.env.token);
