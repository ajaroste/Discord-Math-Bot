const Discord = require('discord.js');
const settings = require('./settings .json')
const client = new Discord.Client();
const prefix = settings.Prefix; // prefix for bot commands
const token = settings.Token;

client.on('ready',() => {

console.log("Bot çalıştırıldı !!")


})


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase()


    if (command === 'help') {
      console.log("Help Kullanıldı")
      message.reply(new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('MATEMATİK BOTUNUN YAPABİLECEĞİ BAZI KOMUTLAR')
      .setDescription('BU BOT SİZE SADECE BAZI İŞLEMLERDE YARDIMCI OLMASI İÇİN TASARLANMIŞTIR! 😊')
      .addFields(
        { name: 'KARAKÖKÜNÜ ALAMAK İÇİN:', value: '!karakök' },
        {name: 'KARESİNİ ALAMAK İÇİN:', value: '!karesi'},
        {name: 'FAKTÖRİYELİNİ ALAMAK İÇİN:', value: '!fac'},
        {name: 'KÜPÜNÜ ALAMAK İÇİN:', value: '!küpü', inline: true },
      )
      .setTimestamp() 
      )
    }

//yenileme restart komudu 'kullanıcı id'sini ve bot adını yazmayı unutmayın'


  /*  if (command === 'yenile') {
      if (message.author.id !== 'kullanıcı İD') return; 
  
      message.channel.send('Bot yeniden başlatılıyor...').then(() => {
        exec('Bot name', (err, stdout, stderr) => {
          if (err) {
            console.error(err);
            return message.channel.send('Bot yeniden başlatılamadı!');
          }
  
          console.log(stdout);
          message.channel.send('Bot yeniden başlatıldı!');
        });
      });
    }*/
  

//küp alma komudu
  if (command === 'küpü') {
    message.channel.send('Lütfen bir sayı girin: ');

    let collector = new Discord.MessageCollector(
      message.channel,
      m => m.author.id === message.author.id,
      { time: 10000 }
    );

    collector.on('collect', m => {
      const na = parseInt(m.content);

      if (isNaN(na)) {
        message.channel.send('Lütfen geçerli bir sayı girin: ');
        return;
      }

      const kupual = kupu(na);
      message.channel.send(`Sonuç: ${kupual}`);

      collector.stop();
    });
  }
//kare alma komudu
    if (command === 'karesi') {
      message.channel.send('Lütfen bir sayı girin: ');
  
      let collector = new Discord.MessageCollector(
        message.channel,
        m => m.author.id === message.author.id,
        { time: 10000 }
      );
  
      collector.on('collect', m => {
        const na = parseInt(m.content);
  
        if (isNaN(na)) {
          message.channel.send('Lütfen geçerli bir sayı girin: ');
          return;
        }
  
        const kare = karesi(na);
        message.channel.send(`Sonuç:`);
  message.channel.send(embe())
        collector.stop();
      });
   

  
}


//karakök alma komudu
if (command === 'karakök') {
  message.channel.send('Lütfen bir sayı girin: ');
console.log("qwqe")
    let collector = new Discord.MessageCollector(
      message.channel,
      m => m.author.id === message.author.id,
      { time: 10000 }
    );

    collector.on('collect', m => {
      const na = parseInt(m.content);

      if (isNaN(na)) {
        message.channel.send('Lütfen geçerli bir sayı girin: ');
        return;
      }

      const kkok = karakok(na);
      message.channel.send(`Sonuç: ${kkok} `);
      collector.stop();
    });
  }


 //faktöriyel alma komudu
  if (command === 'fac') {
    message.channel.send('Lütfen bir sayı girin: ');

    let collector = new Discord.MessageCollector(
      message.channel,
      m => m.author.id === message.author.id,
      { time: 10000 }
    );

    collector.on('collect', m => {
      const num = parseInt(m.content);

      if (isNaN(num)) {
        message.channel.send('Lütfen geçerli bir sayı girin: ');
        return;
      }

      const result = factorial(num);
      message.channel.send(`Sonuç: ${result}`);
      collector.stop();
    });

    collector.on('end', collected => {
      if (collected.size === 0) {
        message.channel.send('Yanıt verilmedi!');
      }
    });
  }
});

function karesi(na){
  return na * na;
}

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function karakok(na){
  return Math.sqrt(na);
}


function kupu(na) {

return na * na * na;
}
client.login(token);
