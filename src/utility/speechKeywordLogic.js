const speakFunc = (speak, s) => {
    speak({ text: s, lang: "tr-TR"})
}

export const processLoginScreenSpeech = (startSpeechToText, stopSpeechToText, results, navigate, speak, 
    mobileVehiclePopupVisibility, setmobileVehiclePopupVisibility, payBillPopupVisibility, setPayBillPopupVisibility) => {
        if (results.length > 0){
            let res = results[results.length-1].transcript;
            console.log(res);

            if (["mobil", "araç", "şube", "eve servis", "eve"].includes(res) && mobileVehiclePopupVisibility === false){
                if (setmobileVehiclePopupVisibility != null){setmobileVehiclePopupVisibility(true)};
                speakFunc(speak, 'Eve servis araç menüsü açılıyor')
            } 
    
            else if (["giriş", "hesaba gir", "üye girişi", "hesabıma gir", "giriş yap"].includes(res)){
                console.log("Giriş yapılıyor...");
                speakFunc(speak, 'Giriş yapılıyor');
                stopSpeechToText();
                navigate("/");
    
            } 
            
            else if (["transfer, para aktarma, para gönderme, eft, havale"].includes(res)){
                stopSpeechToText();
                navigate("/account");
            }
    
            else if (["fatura", "ödeme", "fatura öde", "elektrik", "su", "doğalgaz", "internet"].includes(res)){
                if (payBillPopupVisibility === false && setPayBillPopupVisibility !== null){
                    setPayBillPopupVisibility(true);
                }
                console.log("faturalar listeleniyor");
                speakFunc(speak, `
                    3 adet faturanız bulunmaktadır.
                    Elektrik faturası 1450 TL olup, son ödeme tarihi 27 Marttır.
                    Su faturası 250 TL olup, son ödeme tarihi 5 Nisandır.
                    İnternet faturası 170 TL olup, son ödeme tarihi 14 Nisandır.
                `);
            } 
        }
}