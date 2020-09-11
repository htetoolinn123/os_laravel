<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\View;
use App\Category;
use App\Subcategory;
use App\Item;
use App\Brand;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        schema::defaultStringLength(191);

        $categories= Category::all();
        View::share('categories',$categories);

        $subcategories= Subcategory::all();
        View::share('subcategories',$subcategories);

        $items= Item::all();
        View::share('items',$items);

        $brands= Brand::all();
        View::share('brands',$brands);
    }
}
