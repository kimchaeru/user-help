const Discord = require('discord.js');

module.exports = {
    name: "자살해", //여기에 자신이 원하는 명령어를 넣고
    description: "print server ",

    async run (client, message, args) { //여기 안에 ping 이라는 명령어가 실행 되었을때 실행할 코드를 입력 해주시면 됩니다!

        const ping = new Discord.MessageEmbed()
        .setDescription(`자살예방상담전화 : 1393
        정신건강삼당전화 : 1577-0199
        중앙자살예방센터 : http://www.spckorea.or.kr/`);
        message.channel.send(ping); //마지막에는 ping을 보냅니다
    }
}

module.exports = {
    name: "채루", //여기에 자신이 원하는 명령어를 넣고
    description: "print server ",

    async run (client, message, args) { //여기 안에 ping 이라는 명령어가 실행 되었을때 실행할 코드를 입력 해주시면 됩니다!

        const ping = new Discord.MessageEmbed()
        .setDescription("채루님 왜요?");
        message.channel.send(ping); //마지막에는 ping을 보냅니다
    }
}