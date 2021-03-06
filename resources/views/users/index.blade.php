@extends('layouts.base')

@section('title')
	Users
@stop


@section('title-icon')
	users-icon
@stop


@section('content')
<section class="row">
	<div class="data-table">
		<div class="data-table-row data-table-head">
			<div class="data-table-cell">Id</div>
			<div class="data-table-cell">Name</div>
			<div class="data-table-cell">Email</div>
			<div class="data-table-cell">Active</div>
			<div class="data-table-cell">Blocked</div>
			<div class="data-table-cell">Groups</div>
			<div class="data-table-cell">Actions</div>
		</div>
		<div class="data-table-row">
			<div class="data-table-cell">9</div>
			<div class="data-table-cell">Pablo Scasso</div>
			<div class="data-table-cell">pablo@siterocket.com</div>
			<div class="data-table-cell">No</div>
			<div class="data-table-cell">Yes</div>
			<div class="data-table-cell">admin</div>
			<div class="data-table-cell">some actions</div>
		</div>
		<div class="data-table-row">
			<div class="data-table-cell">9</div>
			<div class="data-table-cell">Pablo Scasso</div>
			<div class="data-table-cell">pablo@siterocket.com</div>
			<div class="data-table-cell">No</div>
			<div class="data-table-cell">Yes</div>
			<div class="data-table-cell">admin</div>
			<div class="data-table-cell">some actions</div>
		</div>
		<div class="data-table-row">
			<div class="data-table-cell">9</div>
			<div class="data-table-cell">Pablo Scasso</div>
			<div class="data-table-cell">pablo@siterocket.com</div>
			<div class="data-table-cell">No</div>
			<div class="data-table-cell">Yes</div>
			<div class="data-table-cell">admin</div>
			<div class="data-table-cell">some actions</div>
		</div>
	</div><!-- /.data-table -->
</section>
@stop