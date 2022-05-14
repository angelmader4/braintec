window.addEventListener('DOMContentLoaded', event => {
	const sidebarToggle = document.body.querySelector('#sidebarToggle');
	if (sidebarToggle) {
		sidebarToggle.addEventListener('click', event => {
			event.preventDefault();
			document.body.classList.toggle('sb-sidenav-toggled');
			localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
		});
	}

	const datatablesSimple = document.getElementById('datatablesSimple');
	if (datatablesSimple) {

		// $('#datatablesSimple').DataTable({
		// 	language: {
		// 		url: "//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json"
		// 	},
		// });
		new simpleDatatables.DataTable(datatablesSimple);
	}

});