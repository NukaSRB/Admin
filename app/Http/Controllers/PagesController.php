<?php

namespace App\Http\Controllers;

class PagesController extends Controller
{
    public function dashboard()
    {
    	return view('dashboard.index');
    }

    public function users()
    {
    	return view('users.index');
    }
}
