const button = document.getElementById('klik');

button.addEventListener('click', function () {
	alert('Halo, Selamat Datang');
});

function clearForm() {
	const form = document.getElementById('dataForm');
	const namaDepan = document.getElementById('nama_depan').value.trim();
	const namaBelakang = document.getElementById('nama_belakang').value.trim();
	const email = document.getElementById('email').value.trim();
	const password = document.getElementById('password').value.trim();
	const kota = document.getElementById('kota').value;

	if (!namaDepan || !namaBelakang || !email || !password || kota === 'pilih') {
		alert('Tidak boleh input data kosong!');
	} else {
		alert('Data berhasil terinput!');
		form.reset();
	}
}
