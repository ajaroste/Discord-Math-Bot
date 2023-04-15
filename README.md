#Matematiksel Hesaplamalar Yapan Discord Botu
Bu proje, Discord sunucularında matematiksel hesaplamalar yapmak için kullanılabilecek bir Discord botudur. Bot, kullanıcılardan aldığı komutlara göre hesaplamalar yapar ve sonuçları sunucuda gösterir.

Kullanım
Botun çalışması için öncelikle settings.json dosyasında Discord bot token'ınızı ve botun kullanacağı prefix'i belirtmeniz gerekiyor. Ardından, botu çalıştırmak için npm install komutunu kullanarak gerekli paketleri yüklemeniz ve node index.js komutunu kullanarak botu çalıştırmanız yeterlidir.

Bot, sunucuda belirli komutları dinleyerek matematiksel hesaplamalar yapar. Aşağıdaki komutlar bot tarafından desteklenmektedir:

!küpü: Kullanıcıdan bir sayı girmesini ister ve ardından bu sayının küpünü hesaplayarak sonucunu sunucuda gösterir.
!karakök: Kullanıcıdan bir sayı girmesini ister ve ardından bu sayının karekökünü hesaplayarak sonucunu sunucuda gösterir.
!fac: Kullanıcıdan bir sayı girmesini ister ve ardından bu sayının faktöriyelini hesaplayarak sonucunu sunucuda gösterir.
!help: Bot tarafından desteklenen tüm komutları ve kullanımlarını gösterir.
Geliştirme
Bu bot, JavaScript ve Discord.js kullanılarak geliştirilmiştir. Kodu inceleyerek botun nasıl çalıştığını ve nasıl geliştirilebileceğini anlayabilirsiniz. Örneğin, hata kontrolünü geliştirebilir veya botun matematiksel hesaplamalar yapmak için kullanabileceği yeni komutlar ekleyebilirsiniz.
