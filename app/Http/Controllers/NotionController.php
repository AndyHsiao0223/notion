<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

use App\Models\Notion;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;

class NotionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response 
    {
        return Inertia::render('Notion/Index', [
            'notion' => Notion::with('user:id,name')->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'message' => 'required|string|max:255'
        ]);
        $request->user()->notion()->create($validated);

        return redirect(route('notion.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Notion $notion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Notion $notion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Notion $notion): RedirectResponse
    {
        $this->authorize('update', $notion);
 
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);
 
        $notion->update($validated);
 
        return redirect(route('notion.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Notion $notion): RedirectResponse
    {
        $this->authorize('delete', $notion);
 
        $notion->delete();
 
        return redirect(route('notion.index'));

    }
}
