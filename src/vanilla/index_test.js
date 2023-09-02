window.onload = () => {
  const topPageButton = document.querySelector('#start_button');
  const sections = document.getElementsByClassName('page');
  const BottomText = document.querySelector('#bottom p');
  const bottom = document.getElementById('bottom');
  const next = document.querySelector('#next_btn button');
  const back = document.querySelector('#back_btn button');
  const screen = document.getElementById('screen');
  const modal = document.getElementById('modal-wrapper');
  const contents = document.getElementById('contents');
  const submit = document.getElementById('submit');

  const questionNum = sections.length - 2;
  let current = 1;

  let is_normal,
    owner,
    car_name,
    car_type,
    car_number,
    car_length,
    car_width,
    car_height,
    address,
    storage_address,
    police_station,
    residence_address,
    last_name,
    first_name,
    last_name_kana,
    first_name_kana,
    phone,
    car_NumberPlate,
    replacement_car_NumberPlate,
    replacement_car_number,
    contact_name,
    contact_phone;

  const addElement = (to, text) => {
    const newEl = document.createElement('div');
    newEl.classList.add('content');
    const p = document.createElement('p');
    p.textContent = text;
    newEl.appendChild(p);
    to.appendChild(newEl);
  };

  // テスト用
  document.getElementById('manufacturer').value = 'BMW';
  document.getElementById('car_type_number').value = 'XABA-MF165';
  document.getElementById('identification_number').value = 'WMWMF32070TV47471';
  document.getElementById('length').value = '111';
  document.getElementById('width').value = '222';
  document.getElementById('height').value = '333';
  document.getElementById('owner_address').value = '東京都港区六本木1-1-1';
  document.getElementById('parking_address').value = '東京都港区六本木1-1-1';
  document.getElementById('police_station').value = '港';
  document.getElementById('official_address').value = '東京都港区六本木1-1-1';
  document.getElementById('familyname_kanji').value = '山田';
  document.getElementById('firstname_kanji').value = '太郎';
  document.getElementById('familyname_kana').value = 'ヤマダ';
  document.getElementById('firstname_kana').value = 'タロウ';
  document.getElementById('phone').value = '090-1234-5678';
  document.getElementById('current_car_number').value = '静岡５３０れ1234';
  document.getElementById('ex_car_number').value = '静岡５３０れ1234';
  document.getElementById('ex_identification_number').value = 'AE-E12345678';
  document.getElementById('submissioners_name').value = '山田太郎';
  document.getElementById('submissioners_phone').value = '090-1234-5678';

  topPageButton.addEventListener('click', () => {
    bottom.style.display = 'flex';
    sections[0].classList.add('disable');
    sections[1].classList.remove('disable');
    BottomText.textContent = `Step ${current}/${questionNum}`;
  });

  screen.addEventListener('click', () => {
    modal.classList.add('disable');
    screen.classList.add('disable');
    next.style.disabled = false;
    back.style.disabled = false;
  });

  next.addEventListener('click', () => {
    if (current == 1) back.disabled = false;
    if (current != questionNum) {
      sections[current].classList.add('disable');
      // current = questionNum;
      current++;
      sections[current].classList.remove('disable');
      BottomText.textContent = `Step ${current}/${questionNum}`;
      if (current == questionNum)
        document.querySelector('#next_btn button').textContent = '完了';
    } else {
      next.style.disabled = true;
      back.style.disabled = true;
      screen.classList.remove('disable');
      modal.classList.remove('disable');
      is_normal = document.getElementById('normal_size').checked;
      if (document.getElementById('owner').checked) owner = 'own';
      else if (document.getElementById('rent').checked) owner = 'rent';
      else owner = 'share';
      car_name = document.getElementById('manufacturer').value;
      car_type = document.getElementById('car_type_number').value;
      car_number = document.getElementById('identification_number').value;
      car_length = document.getElementById('length').value;
      car_width = document.getElementById('width').value;
      car_height = document.getElementById('height').value;
      address = document.getElementById('owner_address').value;
      storage_address = document.getElementById('parking_address').value;
      police_station = document.getElementById('police_station').value;
      residence_address = document.getElementById('official_address').value;
      last_name = document.getElementById('familyname_kanji').value;
      first_name = document.getElementById('firstname_kanji').value;
      last_name_kana = document.getElementById('familyname_kana').value;
      first_name_kana = document.getElementById('firstname_kana').value;
      phone = document.getElementById('phone').value;
      car_NumberPlate = document.getElementById('current_car_number').value;
      replacement_car_NumberPlate =
        document.getElementById('ex_car_number').value;
      replacement_car_number = document.getElementById(
        'ex_identification_number'
      ).value;
      contact_name = document.getElementById('submissioners_name').value;
      contact_phone = document.getElementById('submissioners_phone').value;

      addElement(contents, 'お車の種類: ' + (is_normal ? '普通車' : '小型車'));
      addElement(
        contents,
        '駐車場の所有者: ' +
          (owner == 'own'
            ? '自己所有'
            : owner == 'rent'
            ? '賃貸・貸駐車場'
            : '共有名義')
      );
      addElement(contents, '車名: ' + car_name);
      addElement(contents, '形式: ' + car_type);
      addElement(contents, '車台番号: ' + car_number);
      addElement(contents, '長さ: ' + car_length);
      addElement(contents, '幅: ' + car_width);
      addElement(contents, '高さ: ' + car_height);
      addElement(contents, '使用の本拠の住所: ' + address);
      addElement(contents, '保管場所の住所: ' + storage_address);
      addElement(contents, '管轄の警察署: ' + police_station);
      addElement(contents, '申請者住所住所: ' + residence_address);
      addElement(
        contents,
        '申請者氏名(漢字): ' + last_name + '　' + first_name
      );
      addElement(
        contents,
        '申請者氏名(カナ): ' + last_name_kana + '　' + first_name_kana
      );
      addElement(contents, '電話番号: ' + phone);
      addElement(contents, '自動車登録番号: ' + car_NumberPlate);
      addElement(
        contents,
        '代替自動車車台番号: ' + replacement_car_NumberPlate
      );
      addElement(contents, '代替自動車登録番号: ' + replacement_car_number);
      addElement(contents, '代理人氏名: ' + contact_name);
      addElement(contents, '代理人電話番号: ' + contact_phone);
    }
  });

  back.addEventListener('click', () => {
    sections[current].classList.add('disable');
    if (current == questionNum) {
      document.querySelector('#next_btn button').textContent = '次へ';
    }
    current--;
    if (current == 1) back.disabled = true;
    sections[current].classList.remove('disable');
    BottomText.textContent = `Step ${current}/${questionNum}`;
  });

  submit.addEventListener('click', () => {
    submit.disabled = true;
    sections[current].classList.add('disable');
    current++;
    sections[current].classList.remove('disable');
    modal.classList.add('disable');
    screen.classList.add('disable');
    bottom.style.display = 'none';
  });
};
