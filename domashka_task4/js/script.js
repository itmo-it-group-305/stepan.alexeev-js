/**
 * Created by Gremlin on 20.11.15.
 */
    var sobitie=[];
var dateCheck;
sobitie.hazar={
    dateYear : 965,
    sobitie : 'Разгром Хазарского каганата',
    readMore : 'войском Киевского князя Святослава Игоревича.'
};

sobitie.kresh= {
    dateYear: 988,
    sobitie: 'Крещение Руси.',
    readMore: 'Киевская Русь принимает православное христианство.'
};


sobitie.kalka= {
    dateYear: 1223,
    sobitie: 'Битва на Калке',
    readMore: 'первое сражение между русскими и моголами.'
};

sobitie.nevBitva= {
    dateYear: 1240,
    sobitie: 'Невская битва',
    readMore: 'военный конфликт между русскими во главе с новгородским князем Александром и шведами.'
};

sobitie.chud= {
    dateYear: 1242,
    sobitie: 'Битва на Чудском озере',
    readMore: 'сражение между русскими во главе с Александром Невским и рыцарями Ливонского ордена. Эта битва вошла в историю, как "Ледовое побоище". Подробнее'
};

sobitie.kulik= {
    dateYear: 1380,
    sobitie: 'Куликовская битва',
    readMore: 'сражение между объединенной армией русских княжеств во главе с Дмитрием Донским и армией Золотой Орды во главе с Мамаем. Подробнее'
};


sobitie.mongolEnd= {
    dateYear: 1480,
    sobitie: 'Окончательное избавление Руси от монголо-татарского ига.',
    readMore: 'Подробнее'
};


sobitie.kazanBral= {
    dateYear: 1552,
    sobitie: 'Взятие Казани русскими войсками Ивана Грозного',
    readMore: 'прекращение существования Казанского ханства и включение его в состав Московской Руси.'
};

sobitie.astrahanBral= {
    dateYear: 1556,
    sobitie: 'Присоединение Астраханского ханства',
    readMore: 'к Москвкой Руси.'
};

sobitie.patri= {
    dateYear: 1589,
    sobitie: 'Учреждение патриаршества',
    readMore: 'в России.'
};

for (i in sobitie){
    dateCheck=window.prompt('Введите дату события: '+sobitie[i].sobitie);
    if(+dateCheck==sobitie[i].dateYear){
        document.write('Правильно! '+sobitie[i].dateYear+'год.: ');
    }else{
        document.write('Не правильно! '+sobitie[i].dateYear+'год.: ');
    }
    document.write('<b>'+sobitie[i].sobitie+'</b> ');
    document.write(sobitie[i].readMore+'<br>');
}