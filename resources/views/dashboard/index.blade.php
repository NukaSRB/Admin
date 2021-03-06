@extends('layouts.base')

@section('title')
	Dashboard
@stop


@section('title-icon')
	dashboard-icon
@stop


@section('content')

<section class="row">
	<div class="col-sm-6">
		<div class="box">
			<div class="box-header">
				<h3 class="box-title">Latest Users</h3>
			</div>
			<div class="row">
				<div class="data-table">
					<div class="data-table-row data-table-head">
						<div class="data-table-cell">Name</div>
						<div class="data-table-cell">Email</div>
						<div class="data-table-cell">Active</div>
					</div>
					<div class="data-table-row">
						<div class="data-table-cell">Pablo Scasso</div>
						<div class="data-table-cell">pablo@siterocket.com</div>
						<div class="data-table-cell">No</div>
					</div>
					<div class="data-table-row">
						<div class="data-table-cell">Julia Dreyfuss</div>
						<div class="data-table-cell">julia@siterocket.com</div>
						<div class="data-table-cell">No</div>
					</div>
					<div class="data-table-row">
						<div class="data-table-cell">Larry David</div>
						<div class="data-table-cell">pablo@siterocket.com</div>
						<div class="data-table-cell">Yes</div>
					</div>
					<div class="data-table-row">
						<div class="data-table-cell">Jerry Seinfeld</div>
						<div class="data-table-cell">jerry@siterocket.com</div>
						<div class="data-table-cell">No</div>
					</div>
					<div class="data-table-row">
						<div class="data-table-cell">Pablo Scasso</div>
						<div class="data-table-cell">pablo@siterocket.com</div>
						<div class="data-table-cell">No</div>
					</div>
				</div><!-- /.data-table -->
			</div>
		</div>
	</div>
	<div class="col-sm-6">
		<div class="box">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam ipsum in, laboriosam, dolores corrupti ullam vitae, quam, sit iusto esse doloremque rem harum alias reiciendis perspiciatis ipsa laudantium hic facilis.
		</div>
	</div>
</section><!-- /.row -->

@stop