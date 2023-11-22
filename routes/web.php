<?php

use App\Http\Controllers\ArticleController;
use App\Models\Article;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[ArticleController::class, 'index'])->name('home');
Route::get('/posts/{article:id}',[ArticleController::class, 'show'])->name('article.show');
