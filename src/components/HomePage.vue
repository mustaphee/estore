<template>
 <div id="all">
      <header-comp></header-comp>
      <div id="heading-breadcrumbs">
        <div class="container">
          <div class="row d-flex align-items-center flex-wrap">
            <div class="col-md-7">
              <h1 class="h2 text-center">Welcome to Our Store</h1>
            </div>
            <!-- <div class="col-md-5">
              <ul class="breadcrumb d-flex justify-content-end">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">Category with left sidebar</li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>

       <section>
            <div class="project owl-carousel">
              <div class="item"><img src="static/img/main-slider1.jpg" alt="" class="img-fluid"></div>
              <div class="item"><img src="static/img/main-slider2.jpg" alt="" class="img-fluid"></div>
              <div class="item"><img src="static/img/main-slider3.jpg" alt="" class="img-fluid"></div>
              <div class="item"><img src="static/img/main-slider4.jpg" alt="" class="img-fluid"></div>
            </div>
          </section>

      <div id="content">
        <div class="container">
          <div class="row bar">
            <div class="col-md-3">
              <!-- MENUS AND FILTERS-->
              <div class="panel panel-default sidebar-menu">
                <div class="panel-heading">
                  <h3 class="h4 panel-title">Categories</h3>
                </div>
                <div class="panel-body">
                  <ul v-for="department in departments" :key="department"  class="nav nav-pills flex-column text-sm category-menu">
                    <li class="nav-item"><a href="shop-category.html" class="nav-link d-flex align-items-center justify-content-between"><span> {{department.name}} </span></a>
                      <ul v-for="category in categorySort(department.department_id)" :key="category" class="nav nav-pills flex-column">
                        <li class="nav-item"><a href="shop-category.html" class="nav-link">{{category.name}}</a></li>
                        </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="panel panel-default sidebar-menu">
                <div class="panel-heading d-flex align-items-center justify-content-between">
                  <h3 class="h4 panel-title">Brands</h3><a href="#" class="btn btn-sm btn-danger"><i class="fa fa-times-circle"></i><span class="d-none d-md-inline-block">Clear</span></a>
                </div>
                <div class="panel-body">
                  <form>
                    <div class="form-group">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"> Armani  (10)
                        </label>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"> Versace  (12)
                        </label>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"> Carlo Bruni  (15)
                        </label>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"> Jack Honey  (14)
                        </label>
                      </div>
                    </div>
                    <button class="btn btn-sm btn-template-outlined"><i class="fa fa-pencil"></i> Apply</button>
                  </form>
                </div>
              </div>
              <div class="panel panel-default sidebar-menu">
                <div class="panel-heading d-flex align-items-center justify-content-between">
                  <h3 class="h4 panel-titlen">Colours</h3><a href="#" class="btn btn-sm btn-danger"><i class="fa fa-times-circle"></i><span class="d-none d-md-inline-block">Clear</span></a>
                </div>
                <div class="panel-body">
                  <form>
                    <div class="form-group">
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"><span class="colour white"></span> White (14)
                        </label>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"><span class="colour blue"></span> Blue (10)
                        </label>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"><span class="colour green"></span>  Green (20)
                        </label>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"><span class="colour yellow"></span>  Yellow (13)
                        </label>
                      </div>
                      <div class="checkbox">
                        <label>
                          <input type="checkbox"><span class="colour red"></span>  Red (10)
                        </label>
                      </div>
                    </div>
                    <button class="btn btn-sm btn-template-outlined"><i class="fa fa-pencil"></i> Apply</button>
                  </form>
                </div>
              </div>
              <div class="banner"><a href="shop-category.html"><img src="static/img/banner.jpg" alt="sales 2014" class="img-fluid"></a></div>
            </div>

<!-- <section class="bar bg-primary no-mb color-white">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>Block with primary background</h1>
              <p class="lead mb-0">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>
          </div>
        </div>
      </section> -->

            <div class="col-md-9">
              <div class="bg-primary no-mb color-white" style="padding: 8px; text-transform: uppercase">
              <h1 class="text-center">Featured {{departments[0].name}} Products</h1>
              </div>
              <p class="text-muted lead" style="margin: 20px !important">{{departments[0].description}}</p>
              <div class="row products products-big">
                <!-- <div class="col-lg-4 col-md-6">
                  <div class="product">
                    <div class="image"><a href="shop-detail.html"><img src="static/img/product1.jpg" alt="" class="img-fluid image1"></a></div>
                    <div class="text">
                      <h3 class="h5"><a href="shop-detail.html">Fur coat with very but very very long name</a></h3>
                      <p class="price">$143.00</p>
                    </div>
                  </div>
                </div> -->
                <div v-for="product in firstFeaturedProducts" :key="product">
                  <!-- <li>{{product}}</li> -->
                <div class="col-lg-4 col-md-6">
                  <div class="product">
                    <div class="image"><a href="shop-detail.html"><img src="static/img/product2.jpg" alt="" class="img-fluid image1"></a></div>
                    <div class="text">
                      <h3 class="h5"><a href="shop-detail.html">{{product.name}}</a></h3>
                      <p class="price">
                        <del>${{product.discounted_price}}</del> ${{product.price}}
                      </p>
                    </div>
                    <div class="ribbon-holder">
                      <div class="ribbon sale">SALE</div>
                      <div class="ribbon new">NEW</div>
                    </div>
                  </div>
                </div>
                </div>
                <!-- <div class="col-lg-4 col-md-6">
                  <div class="product">
                    <div class="image"><a href="shop-detail.html"><img src="static/img/product3.jpg" alt="" class="img-fluid image1"></a></div>
                    <div class="text">
                      <h3 class="h5"><a href="shop-detail.html">Black Blouse Versace</a></h3>
                      <p class="price">$143.00</p>
                    </div>
                  </div>
                </div> -->

              <div class="col-md-12 bg-primary no-mb color-white" style="padding: 8px; text-transform: uppercase">
                  <h1 class="text-center">Featured Regional Products</h1>
              </div>
              <p class="text-muted lead" style="margin: 20px !important">In our Ladies department we offer wide selection of the best products we have found and carefully selected worldwide. Pellentesque habitant morbi tristique senectus et netuss.</p>
              


                <div class="col-lg-4 col-md-6">
                  <div class="product">
                    <div class="image"><a href="shop-detail.html"><img src="static/img/product4.jpg" alt="" class="img-fluid image1"></a></div>
                    <div class="text">
                      <h3 class="h5"><a href="shop-detail.html">Black Blouse Versace</a></h3>
                      <p class="price">$143.00</p>
                    </div>
                  </div>
                </div>

         

                <div class="col-lg-4 col-md-6">
                  <div class="product">
                    <div class="image"><a href="shop-detail.html"><img src="static/img/product3.jpg" alt="" class="img-fluid image1"></a></div>
                    <div class="text">
                      <h3 class="h5"><a href="shop-detail.html">White Blouse Armani</a></h3>
                      <p class="price">
                        <del>$280</del> $143.00
                      </p>
                    </div>
                    <div class="ribbon-holder">
                      <div class="ribbon sale">SALE</div>
                      <div class="ribbon new">NEW</div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="product">
                    <div class="image"><a href="shop-detail.html"><img src="static/img/product4.jpg" alt="" class="img-fluid image1"></a></div>
                    <div class="text">
                      <h3 class="h5"><a href="shop-detail.html">White Blouse Versace</a></h3>
                      <p class="price">$143.00</p>
                    </div>
                    <div class="ribbon-holder">
                      <div class="ribbon new">NEW</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 banner mb-small"><a href="#"><img src="static/img/banner2.jpg" alt="" class="img-fluid"></a></div>
              </div>
              <div class="pages">
                <p class="loadMore text-center"><a href="#" class="btn btn-template-outlined"><i class="fa fa-chevron-down"></i> Load more</a></p>
                <nav aria-label="Page navigation example" class="d-flex justify-content-center">
                  <ul class="pagination">
                    <li class="page-item"><a href="#" class="page-link"> <i class="fa fa-angle-double-left"></i></a></li>
                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- GET IT-->
      <div class="get-it">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 text-center p-3">
              <h3>Do you want cool website like this one?</h3>
            </div>
            <div class="col-lg-4 text-center p-3">   <a href="#" class="btn btn-template-outlined-white">Buy this template now</a></div>
          </div>
        </div>
      </div>
      <footer-comp></footer-comp>
    </div>
</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
      // The arrays initialized with contents are fallback arrays incase of an improbable
      // fetching error from the api
      departments: this.$store.getters.getDepartments, 
      categories: this.$store.getters.getCategories,
      firstFeaturedProducts: this.$store.getters.getFirstFeatured || [],
      secondFeaturedProducts: this.$store.getters.getSecondFeatured || [],
      error: 'An error occurred' // Incase of an unkown error
    }
  },
  methods: {
    fetchDepartments () {
      this.ajax.get('departments')
      .then((res) => {
        console.log(res.data)
        this.$store.commit('setDepartments', res.data)
      })
      .catch((err) => {
        this.error = err
      })
    },
    fetchCategories () {
      this.ajax.get('categories')
      .then(async (res) => {
        console.log(res.data.rows)
        this.$store.commit('setCategories', res.data.rows)
        let a = await Math.floor(Math.random()*(res.data.rows.length+1))
        const result = await Promise.all(this.fetchFirstFeaturedProducts(1), this.fetchSecondFeaturedProducts(a))
      })
      .catch((err) => {
        this.error = err
      })
    }, 
    categorySort(id) {
      return this.categories.filter((category) => category.department_id === id)
    },
    // randomIter(arr, iterRound) {
    //   for (i=0; i < iterRound; i++) {
    //     randInt = Math.floor(Math.random()*(arr.length + 1))
    //     newArr.push()
    //   }

    // },
    fetchFirstFeaturedProducts(categoryNumber) {
      this.ajax.get('products/inCategory/'+categoryNumber+'?limit=3')
      .then((res) => {
        console.log(res.data.rows)
        this.$store.commit('setFirstFeatured', res.data.rows)
      })
      .catch((err) => {
        this.error = err
      })
    },
    fetchSecondFeaturedProducts(categoryNumber) {
      this.ajax.get('products/inCategory/'+categoryNumber+'?limit=3')
      .then((res) => {
        console.log(res.data.rows)
        this.$store.commit('setSecondFeatured', res.data.rows)
      })
      .catch((err) => {
        this.error = err
      })
    }
  },
  mounted () {
    this.fetchDepartments()
    this.fetchCategories()
  }
}
</script>
