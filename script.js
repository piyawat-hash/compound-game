let currentAnswer = 0;
let score = 0;

function generateQuestion() {
    // สุ่มค่าตามขอบเขตโครงงาน (เงินต้น 10,000 บาท) [cite: 175]
    const p = 10000;
    const r = (Math.random() * 0.1).toFixed(2); // สุ่มดอกเบี้ย 0-10%
    const n = Math.floor(Math.random() * 20) + 1; // สุ่มปี 1-20 ปี [cite: 269]
    const mode = document.getElementById('mode').value;

    document.getElementById('principal').value = p;
    document.getElementById('rate').value = r;
    document.getElementById('years').value = n;

    if (mode === "simple") {
        // สูตรดอกเบี้ยคงต้น [cite: 265, 335]
        currentAnswer = p * (1 + (n * r));
        document.getElementById('result-display').innerText = `สูตร: A = ${p}(1 + (${n} * ${r}))`;
    } else {
        // สูตรดอกเบี้ยทบต้น [cite: 273, 336]
        currentAnswer = p * Math.pow((1 + parseFloat(r)), n);
        document.getElementById('result-display').innerText = `สูตร: A = ${p}(1 + ${r})^${n}`;
    }
    
    // จัดการจุดทศนิยมตามมาตรฐานการเงิน [cite: 339]
    currentAnswer = parseFloat(currentAnswer.toFixed(2));
}

function checkAnswer() {
    const userVal = parseFloat(document.getElementById('user-answer').value);
    // ระบบตรวจสอบคำตอบเปรียบเทียบค่าที่กรอกกับค่าจริง [cite: 336]
    if (userVal === currentAnswer) {
        score += 10;
        alert("ถูกต้อง! พลังของดอกเบี้ยทบต้นสุดยอดไปเลย"); [cite: 361]
    } else {
        alert(`ผิดครับ! คำตอบที่ถูกคือ ${currentAnswer}`);
    }
    document.getElementById('score-board').innerText = `คะแนน: ${score}`;
}
