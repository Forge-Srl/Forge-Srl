module.exports = function (data) {
    return `<div class="text-center bg-grad">
		<div class="container">
			<div class="row all-text-white">
				<div class="col-md-12 align-self-center mt-6 mt-md-7">
					<h1 class="fw-bold display-1 mb-2 mb-md-n4">${data.eleventyNavigation.title}</h1>
				</div>
			</div>
		</div>
	</div>`
}