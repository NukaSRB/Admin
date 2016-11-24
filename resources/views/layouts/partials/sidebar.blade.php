<aside id="sidebar"
	   class="sidebar"
	   :class="{ minimized: sidebarIsMinimized }"
>
	<button @click="toggleSidebarSize" class="sidebar-compact-btn"></button>
	<div class="brand">
		<a href="{{ url('dashboard') }}">
			<img class="brand-logo" src="/img/esensi-logo.png" alt="Company logo">
		</a>
	</div>
	<nav class="side-nav">
		<ul class="nav">
			<li class="nav-item">
				<a class="nav-link" href="{{ url('dashboard') }}" title="Dashboard">
					<span class="nav-link-icon dashboard-icon"></span>
					<span class="nav-link-text">Dashboard</span>
				</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="{{ url('users') }}" title="Users">
					<span class="nav-link-icon users-icon"></span>
					<span class="nav-link-text">Users</span>
				</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link" title="Pages">
					<span class="nav-link-icon pages-icon"></span>
					<span class="nav-link-text">Pages</span>
				</a>
			</li>
			<li class="nav-item">
				<a href="#" class="nav-link" title="Activities">
					<span class="nav-link-icon activities-icon"></span>
					<span class="nav-link-text">Activities</span>
				</a>
			</li>
		</ul>
	</nav>
</aside><!-- /#sidebar -->