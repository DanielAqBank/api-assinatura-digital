<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Docusign\TemplateController;

Route::middleware('auth')->group(function () {
    Route::get('/', function () {
        return redirect()->route('templates.index');
    });
});

Route::get('/dashboard', function () {
    return view('templates.index');
})->middleware(['auth', 'verified'])->name('templates.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('templates')->group(function () {
    Route::post('createTemplateSignFromPdf', [TemplateController::class, 'createTemplateSignFromPdf']);
    Route::post('createTemplateFromPdf', [TemplateController::class, 'createTemplateFromPdf']);
    Route::get('/{id}', [TemplateController::class, 'archiveTemplate'])->name('templates.archive');
    Route::get('/', [TemplateController::class, 'getTemplatesAll'])->name('templates.index');
    Route::post('/edit', [TemplateController::class, 'edit'])->name('templates.edit');
    Route::get('/clone/{id}', [TemplateController::class, 'cloneTemplate'])->name('templates.clone');
    Route::get('/create', [TemplateController::class, 'createTemplateFromPdf'])->name('templates.create');
});

require __DIR__.'/auth.php';
