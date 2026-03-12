const animeData = [
    { 
        id: 1, 
        title: "Bungo Stray Dogs", 
        rating: 8.5, 
        img: "https://m.media-amazon.com/images/M/MV5BMjFhN2U4ZDYtZGVmYi00YjVlLWEyN2ItYjM3NGYyYmQ5ZDU2XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", 
        desc: "เหล่าผู้มีพลังพิเศษที่ตั้งชื่อตามนักเขียนชื่อดัง ต้องไขปริศนาคดีเหนือธรรมชาติในเมืองโยโกฮาม่า พลังพิเศษแต่ละอย่างมีเอกลักษณ์และเท่มาก!", 
        genre: "Action, Supernatural, Mystery" 
    },
    { 
        id: 2, 
        title: "Sakamoto Days", 
        rating: 8.9, 
        img: "https://m.media-amazon.com/images/M/MV5BNmU2OTY1YzAtN2JmMi00YjhkLWE3YmItOTFhMWRhYjFhYmE0XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", 
        desc: "อดีตนักฆ่าในตำนานที่วางมือไปเปิดร้านขายของชำ แม้จะอ้วนขึ้นจนดูเหมือนคุณลุงธรรมดา แต่ฝีมือการต่อสู้ยังเฉียบคมเพื่อปกป้องความสงบสุขของครอบครัว", 
        genre: "Action, Comedy" 
    },
    { 
        id: 3, 
        title: "Black Clover", 
        rating: 8.1, 
        img: "https://m.media-amazon.com/images/M/MV5BNTAzYTlkMWEtMmQyMi00YmU0LWI1Y2ItYmI3NTRkM2ViN2FmXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg", 
        desc: "อัสต้า เด็กหนุ่มที่เกิดมาไร้พลังเวทมนตร์ในโลกที่ทุกคนมีเวทย์ แต่เขาไม่ยอมแพ้และได้รับ 'กริมมัวร์ห้าแฉก' เพื่อก้าวไปสู่ตำแหน่งจักรพรรดิเวทมนตร์", 
        genre: "Action, Fantasy" 
    },
    { 
        id: 4, 
        title: "One Piece", 
        rating: 8.7, 
        img: "https://bit.ly/406XGvY", 
        desc: "การผจญภัยของกลุ่มโจรสลัดหมวกฟาง มุ่งหน้าสู่ท้องทะเลอันกว้างใหญ่เพื่อตามหาสมบัติที่ยิ่งใหญ่ที่สุดในโลก", 
        genre: "Adventure, Fantasy" 
    },
    { 
        id: 5, 
        title: "Death Note", 
        rating: 8.6, 
        img: "https://bit.ly/3U9i2gR", 
        desc: "สมุดที่ใครถูกเขียนชื่อลงไปจะต้องตาย การห่ำหั่นระหว่างอัจฉริยะที่เรียกตัวเองว่าพระเจ้ากับนักสืบระดับโลก", 
        genre: "Thriller, Psychological" 
    },
    { 
        id: 6, 
        title: "Demon Slayer", 
        rating: 8.4, 
        img: "https://bit.ly/483ZpW8", 
        desc: "ทันจิโร่และวิชาดาบปราณน้ำที่งดงาม การต่อสู้อันดุเดือดเพื่อกำจัดอสูรและคืนชีวิตความเป็นมนุษย์ให้น้องสาว", 
        genre: "Action, Fantasy" 
    },
    { 
        id: 7, 
        title: "Naruto Shippuden", 
        rating: 8.3, 
        img: "https://bit.ly/3Y8Z6gB", 
        desc: "นินจาจอมคาถาผู้ไม่เคยถอยหลังให้คำพูดของตัวเอง การก้ามข้ามความเจ็บปวดสู่จุดสูงสุดของหมู่บ้านนินจา", 
        genre: "Action, Ninja" 
    },
    { 
        id: 8, 
        title: "Hunter x Hunter", 
        rating: 9.0, 
        img: "https://bit.ly/3Y7LzC7", 
        desc: "การสอบฮันเตอร์สุดอันตรายและโลกที่เต็มไปด้วยสัตว์ประหลาด ความผูกพันของเพื่อนที่ร่วมฝ่าฟันอันตรายไปด้วยกัน", 
        genre: "Adventure, Action" 
    },
    { 
        id: 9, 
        title: "Spy x Family", 
        rating: 8.5, 
        img: "https://bit.ly/3YFhN7F", 
        desc: "ครอบครัวปลอมๆ ที่ประกอบด้วย พ่อที่เป็นสายลับ แม่ที่เป็นนักฆ่า และลูกสาวที่เป็นผู้ใช้พลังจิต ความฮาและความอบอุ่นจึงเกิดขึ้น", 
        genre: "Comedy, Action" 
    },
    { 
        id: 10, 
        title: "Attack on Titan", 
        rating: 9.1, 
        img: "https://bit.ly/3YFhN7F", 
        desc: "เมื่อมนุษยชาติถูกต้อนให้จนมุมในกำแพง ความหวังเดียวคือการออกไปต่อสู้กับยักษ์กินคนที่น่าเกรงขาม พร้อมความลับที่เปลี่ยนโลกไปตลอดกาล", 
        genre: "Action, Drama, Mystery" 
    }
];

const animeList = document.getElementById('animeList');
const modal = document.getElementById('detailModal');
const modalContent = document.getElementById('modalContent');

// สร้าง Card
animeData.forEach(anime => {
    const card = `
        <div onclick="openModal(${anime.id})" class="anime-card cursor-pointer group">
            <div class="relative overflow-hidden rounded-lg aspect-[3/4]">
                <img src="${anime.img}" class="w-full h-full object-cover transition duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div class="absolute bottom-4 left-4">
                    <span class="text-red-500 font-bold">#${anime.id}</span>
                    <h3 class="font-bold text-sm leading-tight">${anime.title}</h3>
                </div>
            </div>
        </div>
    `;
    animeList.innerHTML += card;
});

function openModal(id) {
    const anime = animeData.find(a => a.id === id);
    modalContent.innerHTML = `
        <div class="md:w-1/3 flex flex-col items-center">
            <img src="${anime.img}" class="rounded-3xl shadow-2xl w-full max-w-[400px] border-4 border-white/10">
        </div>
        <div class="md:w-2/3 space-y-6">
            <h2 class="text-6xl font-black">${anime.title}</h2>
            <div class="flex items-center gap-4 text-xl">
                <span class="text-yellow-400 font-bold"><i class="fas fa-star"></i> ${anime.rating}</span>
                <span class="text-gray-400">|</span>
                <span class="text-gray-300 font-medium">${anime.genre}</span>
            </div>
            <p class="text-2xl text-gray-300 leading-relaxed font-light">${anime.desc}</p>
            <div class="flex gap-4 pt-6">
                <button onclick="closeModal()" class="bg-white text-black px-8 py-3 rounded-full font-bold">ย้อนกลับ</button>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    document.body.classList.add('modal-active');
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-active');
}
