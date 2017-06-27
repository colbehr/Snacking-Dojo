import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snackingdojo',
  templateUrl: './snackingdojo.component.html',
  styleUrls: ['./snackingdojo.component.css']
})
export class SnackingdojoComponent implements OnInit {
items:any = 
[
   {
      "name":"Frito Lays Classic Mix Variety Pack Snack Bags",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b10aba7b-a389-4ef7-9c09-e66d740bdbc6.jpg"
   },
   {
      "name":"Stacy's Organic Simply Naked Pita Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4c49736b-73b6-4606-8954-c1d12ba4bd92.jpg"
   },
   {
      "name":"Annie's Homegrown Organic Bunny Snacks Variety Pack Baked Snack Crackers & Graham Snacks",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_193a08bf-d95e-40ef-bc24-9b73571f9250.jpg"
   },
   {
      "name":"Kirkland Signature Anderson Peanut Butter Filled Pretzels",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d46996b9-1956-4ac6-8959-c9f17e1f5e06.jpg"
   },
   {
      "name":"Kirkland Signature Organic Tortilla Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6a1c75d1-a78d-4f01-83a3-e360f553b2e6.jpg"
   },
   {
      "name":"Taylor Farms Leaf Spinach",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_aa1a42a5-8825-40cb-a07c-9a48ac6c1016.jpg"
   },
   {
      "name":"Utz Pub Mix",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9ff6a1fb-0895-4afc-b6ef-befbd1db8fec.jpg"
   },
   {
      "name":"Kirkland Signature Kettle Brand Krinkle Cut Potato Chips Sea Salt",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_28d369be-6759-40b1-901c-0ee4f1c0cc17.jpg"
   },
   {
      "name":"Snack Factory Organic Pretzel Crisps",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d26f3061-0636-4b04-8a32-ad96346294aa.jpg"
   },
   {
      "name":"Food Should Taste Good Multigrain Tortilla Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b3d96a6f-4575-4c34-bac0-3a96c8fbd6a9.JPG"
   },
   {
      "name":"Sensible Portions Garden Veggie Straws, Sea Salt",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c4bf61a6-723f-424e-a231-8e559f4d0e8f.jpg"
   },
   {
      "name":"Arthur Schuman Cello Parmesan Whisps",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_14b9d2fe-cc09-469d-a44f-fd55916e33bd.jpg"
   },
   {
      "name":"Frito Lays Variety",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f1461275-e452-42fc-8008-2f722fd2e931.jpg"
   },
   {
      "name":"Ruffles Potato Chips, Original",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ba8bd54a-a9c2-4ec3-9358-687349ffc3a4.jpg"
   },
   {
      "name":"Kirkland Signature Tortilla Strips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0597249e-1e81-4eaa-ae1c-f95d97e2b446.jpg"
   },
   {
      "name":"Cape Cod Original Kettle Cooked 40% Reduced Fat Potato Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_60330c1d-5af3-4d60-8c25-7c53f316ba7a.jpg"
   },
   {
      "name":"Snappers Dark Chocolate Sea Salt Caramel Pretzels",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d0de4496-f11d-4289-9bc6-c77484b03d60.jpg"
   },
   {
      "name":"Kettle Organic BBQ Potato Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1e7021c2-c9de-44bf-aa04-354c2cf187eb.jpg"
   },
   {
      "name":"Late July Organic Sea Salt by The Seashore Multigrain Tortilla Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cc82aef3-4467-4e05-90d5-5ec1e94be19f.jpg"
   },
   {
      "name":"Kirkland Signature Red White & Blue Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_78a1f569-6c69-47ea-9a42-82296b9218ff.jpg"
   },
   {
      "name":"Riceworks Organic Sweet Chili Rice Crisp",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_206e9909-4d36-4217-a317-41905a0aaa17.jpg"
   },
   {
      "name":"Tostitos Hint of Lime Tortilla Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3e61cdee-e9ab-4dcf-89dc-73d4d265a248.jpg"
   },
   {
      "name":"Frito Lays Cheetos Puffs",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fb5d2c5c-225b-4e37-9d8e-f86d319ade8b.jpg"
   },
   {
      "name":"Terra Classic Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"N/A Pretzel Croissants",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"Kirkland Signature Anderson Peanut Butter Filled Pretzels",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d46996b9-1956-4ac6-8959-c9f17e1f5e06.jpg"
   },
   {
      "name":"Kirkland Signature Variety Snacking Nuts Almonds, Peanuts And Cashews",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5b72011e-71fd-45f6-aa22-22a0760e38ec.jpg"
   },
   {
      "name":"Kirkland Signature Extra Fancy Unsalted Mixed Nuts",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4910e276-4bfd-4bf7-88b8-bd73745f3388.jpg"
   },
   {
      "name":"Kirkland Signature Trail Mix",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_81a5135c-d3e2-4508-a07d-a970fc37697a.jpg"
   },
   {
      "name":"Kirkland Signature Extra Fancy Mixed Nuts",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fcbd5e4a-09bd-4ce4-8fd8-fe5fde7eaa2c.jpg"
   },
   {
      "name":"Kirkland Signature Almonds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_12317fc0-ea99-4ee2-a07e-92979aa26c6f.jpg"
   },
   {
      "name":"Kirkland Signature Whole Fancy Cashews",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_693a9fe0-4402-4242-b102-00967489946d.jpg"
   },
   {
      "name":"Kirkland Signature Walnuts",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2befd92f-8e02-4341-a8ab-b49e0995ebb2.jpg"
   },
   {
      "name":"Philippine Brand Dried Mangos",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_852498ad-950a-40ff-8f40-ac5f2146aae1.jpg"
   },
   {
      "name":"Kirkland Signature Dry Roasted Almonds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2565539b-14c8-46fe-b7ae-52dd6ff357a4.jpg"
   },
   {
      "name":"Kirkland Signature Cashew Cluster With Almonds And Pumpkin Seeds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c717a530-0195-4652-b302-bc4d74580667.jpg"
   },
   {
      "name":"Kirkland Signature Pistachios",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_215d0e98-7583-4640-bb43-7ecd16e69c35.jpg"
   },
   {
      "name":"Kirkland Signature Pecan Halves",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b7a1cbc5-8d83-4ee6-ba29-e8e19ac42527.jpg"
   },
   {
      "name":"Kirkland Signature Super Extra Large Peanuts",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c5d138f6-67bd-445c-81be-ac687f64c4c5.jpg"
   },
   {
      "name":"Sun Maid\u00ae Organic Raisins",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d7641279-f854-4ff3-a4d7-1726776198d2.jpg"
   },
   {
      "name":"Ocean Spray Craisins Original Dried Cranberries",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_382f1cb6-793c-49ad-87a6-151ef37ae1e1.jpg"
   },
   {
      "name":"Kirkland Signature Salt & Pepper Pistachios",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bea246d7-70cb-4ff3-bae6-af4bd52cbd45.jpg"
   },
   {
      "name":"Kirkland Signature Dry Roasted Macadamias with Sea Salt",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_505e824c-32cd-41e5-96af-ce5ac393d37b.jpg"
   },
   {
      "name":"Mariani Sliced Premium Almonds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_95b0a8b5-dbfe-418a-ae59-94bec09bc710.jpg"
   },
   {
      "name":"Kirkland Signature Roasted Seasoned Seaweed",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f2c4e387-41a1-4718-aae3-57544652608b.jpg"
   },
   {
      "name":"Kirkland Signature Signature Marcona Almonds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_48ddcaeb-b874-4cd2-bf12-a38905d9e32e.jpg"
   },
   {
      "name":"Kirkland Signature Sunsweet Dried Plums",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ffeefab7-dad7-4d64-9e97-6c9626001ec7.jpg"
   },
   {
      "name":"Blue Diamond Smokehouse Almonds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_80d98751-227d-40ad-8352-5da70b5a2914.jpg"
   },
   {
      "name":"Kirkland Signature Organic Pine Nuts",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d641b280-b3f7-45ec-8f34-e6b2409e7a0d.jpg"
   },
   {
      "name":"Kirkland Signature Dried Tart Cherries",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_caccde0e-678f-413e-8a0c-e0a88a73c8af.jpg"
   },
   {
      "name":"Kirkland Signature Organic Whole Cashews Unsalted Unroasted",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_356ab787-9356-4add-b8dd-6ec0056785bf.jpg"
   },
   {
      "name":"Happy Village Organic Dried Calimyrna Figs",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4cb816c3-2279-442c-954d-42aae2c50559.jpg"
   },
   {
      "name":"Nature's Finest Foods Dried Mangoes",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_7b121062-7f35-4099-8110-aaa473c57724.jpg"
   },
   {
      "name":"Kirkland Signature Sahale Snacks Pecan-Cashew Nut Crips with Cinnamon Apples & Peaches Nut Blend",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d44f5433-035f-425e-8ccb-2a10993b4c78.jpg"
   },
   {
      "name":"Foster Farms Whole Fryers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9ace985a-ebb8-418e-b399-419b8f2555a2.jpg"
   },
   {
      "name":"Hershey All Chocolate Fun Size Variety Pack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_69d47f53-1fe3-4c12-9d11-e49a63cd69e9.jpg"
   },
   {
      "name":"Kirkland Signature Almonds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_12317fc0-ea99-4ee2-a07e-92979aa26c6f.jpg"
   },
   {
      "name":"Kirkland Signature Milk Chocolate Almonds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c85af1ca-b214-439e-ab9e-00ae510b45fa.jpg"
   },
   {
      "name":"Nutella & Go & Go! Hazelnut Spread + Breadsticks",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fe4799ac-ac65-4d33-8d76-7d1c2d7f8e48.jpg"
   },
   {
      "name":"Brookside Dark Chocolate A\u00e7ai Blueberry",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_fe5149fd-d5ab-47de-81ee-7c895af5128f.jpg"
   },
   {
      "name":"Kirkland Signature Funhouse Treats",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_12d8556b-229c-41c0-b2d7-691714620afa.jpg"
   },
   {
      "name":"Kirkland Signature Milk Chocolate Covered Raisins",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c80b4028-5f4a-4dd7-92eb-ab1e36681135.jpg"
   },
   {
      "name":"Kirkland Signature 49 Flavors Jelly Belly Jelly Beans",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e2599a76-e75c-4207-9307-4d8a081739fe.jpg"
   },
   {
      "name":"Kirkland Signature Dark Chocolate Covered Mangoes",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e5283150-3371-40f2-99d3-79db7d809d41.jpg"
   },
   {
      "name":"Mars Candy Bar Variety Pack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_90a7e31a-6b1b-4d3a-bb13-12dc12bbeec0.jpg"
   },
   {
      "name":"Meiji Hello Panda Chocolate",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c982cabc-bd49-4aef-a12d-e77ae0792e66.jpg"
   },
   {
      "name":"Kirkland Signature Milk Chocolate Salted Caramel Macadamia Clusters",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_34ad98dc-cc53-4284-964d-2fb3a60ef149.jpg"
   },
   {
      "name":"Kirkland Signature Mini Chocolates Variety Pack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f3d4c4df-9474-401a-8cb2-edafc4a7d230.jpg"
   },
   {
      "name":"Kirkland Signature Dark Chocolate Toasted Cashews",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_85ae848c-9963-4817-a26b-2ab50fc51dbc.jpg"
   },
   {
      "name":"M&M's Peanut Chocolate Candies",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c497b805-f505-4f20-85b1-22fbbe360315.jpg"
   },
   {
      "name":"Hershey Variety Pack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_11b545bd-7c1d-4086-804f-c26160fbc1ad.jpg"
   },
   {
      "name":"Red Vines Red Licorice",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1945a2fd-6737-494c-968c-9839a46e2666.jpg"
   },
   {
      "name":"Sanders Fine Chocolatiers Dark Chocolate Sea Salt Salted Caramels",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cb8aaa12-9c3f-4d09-97a5-e64c89d109d8.jpg"
   },
   {
      "name":"La Boulangere Chocolate Crepes",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a9089605-1e38-4f77-87e7-bbafac3e2be4.jpg"
   },
   {
      "name":"Hershey Milk Chocolate Bar",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5fa8eb3f-439c-46ae-8a18-5b4a4d867c61.jpg"
   },
   {
      "name":"Snickers Full-Size Chocolate Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d396f577-342b-4bd4-accd-971174b9a1e6.jpg"
   },
   {
      "name":"M&M's Resealable Zipper! Pantry Size Milk Chocolate",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a1346da0-73dd-4ad5-bca0-16dd726c040b.jpg"
   },
   {
      "name":"Peppermint Bark",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c35ac786-cc49-47ba-bb13-d6c140e3f81c.jpg"
   },
   {
      "name":"Hershey Simply 5 Chocolate Syrup 2/48 Ounce Bottles",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_da91daf2-4a6b-4a6e-8663-963309fb3924.jpg"
   },
   {
      "name":"Toblerone Swiss Milk Chocolate with Honey & Almond Nougat Candy",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_eadcc9c3-8fbb-4a72-959e-27e7a9537c4c.jpg"
   },
   {
      "name":"Toffee Almond Bark",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c154f95a-249e-431b-a53f-11af05242193.jpg"
   },
   {
      "name":"Hoody's Organic Honey Roasted Whole Cashews",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3c98ebf6-5035-44e5-8c12-d0ea9b3ced9a.jpg"
   },
   {
      "name":"Kirland Signature Almond Bark",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6baea7ac-6f1e-4f80-870d-0558997eeccf.jpg"
   },
   {
      "name":"Godiva Masterpieces Dark Chocolate With Ganache Heart-Shaped Candies",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b8b8e9d4-8f82-42d4-be58-0b74621aa7e8.jpg"
   },
   {
      "name":"Hershey Full Size Milk Chocolate Bar With Almonds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d649dbc9-637c-4547-b1d7-caa64aca73aa.jpg"
   },
   {
      "name":"Food Should Taste Good Multigrain Tortilla Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b3d96a6f-4575-4c34-bac0-3a96c8fbd6a9.JPG"
   },
   {
      "name":"Pepperidge Farm Goldfish Whole Grain Cheddar Baked Snack Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d72d0ee1-aa29-4238-9a4d-3135c13093f2.jpg"
   },
   {
      "name":"Pepperidge Farm Goldfish Cheddar Baked Snack Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2cf2353f-23ee-4e8e-9ca7-9b6f39e195fa.jpg"
   },
   {
      "name":"Sunshine Cheez-It Cheddar Cracker",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2d91543a-1cdd-4cfe-bce6-ab2562ea787a.jpg"
   },
   {
      "name":"Kirkland Signature Organic Animal Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6503e410-8d50-4d22-9946-9a9847266627.jpg"
   },
   {
      "name":"Nabisco Ritz Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_13a82aa4-0c81-471b-ae6e-446313ead10a.jpg"
   },
   {
      "name":"Bamboo Lane Crunchy Rice Rollers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_592cc287-950d-49b5-a47e-a23617c1f14e.jpg"
   },
   {
      "name":"Wheat Thins Original Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_93a27fac-328c-4ac6-8d8b-ec9e9f6995d4.jpg"
   },
   {
      "name":"Miltons Gluten Free Sea Salt Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cc841e85-4c8b-4951-999c-8d5ba6b38d97.jpg"
   },
   {
      "name":"Triscuits Organic",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d7a43c15-2d06-416d-b9e4-02bfb3291927.jpg"
   },
   {
      "name":"Crunchmaster Multi Grain Crackers 6 Seed",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_df5ad81e-96fb-4d56-b49c-402d24d53fa3.jpg"
   },
   {
      "name":"Feel Good Foods Cranberry Almond Chicken Salad",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ef21bf23-c1cd-4ba6-af08-a4727773b9b3.jpg"
   },
   {
      "name":"Kirkland Signature Tortilla Strips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0597249e-1e81-4eaa-ae1c-f95d97e2b446.jpg"
   },
   {
      "name":"Crunchmaster Artisan Four Cheese & Toasted Sesame Rice Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_365d80e8-df54-402f-a65f-a13b2e95008c.jpg"
   },
   {
      "name":"Nabisco Ritz Ritz Crackers 'n Cheese Dip",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_661a5251-b419-410e-ae4a-a2c6de71a6aa.jpg"
   },
   {
      "name":"Nabisco Premium Original Saltine Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1f3303ec-dab7-4e57-9362-3e893d07afe4.jpg"
   },
   {
      "name":"Brenton Organic 7 Grain Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9ad52a76-761e-4bb1-8cc8-05ccfd067b76.jpg"
   },
   {
      "name":"RW Garcia Organic 3 Seed Sweet Potato Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6794d294-50cf-4216-b2ab-0f6d1b73901b.jpg"
   },
   {
      "name":"Simple Mills Almond Flour Crackers",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_36f442ba-8f71-4ae7-9091-a293619e7b20.jpg"
   },
   {
      "name":"Bin Bin Organic Rice Cracker",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_37c82072-b782-47f4-a2a5-01fab715e50e.jpg"
   },
   {
      "name":"Cranberry Orange Biscotti",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"Cheez-It 100% Sharp White Cheddar Grooves Crispy Cracker Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"Quaker Chewy Chocolate Chip/Peanut Butter Chocolate Chip Variety Pack Granola Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4d26749d-677b-419c-bbae-12f250179263.jpg"
   },
   {
      "name":"Nature's Bakery Stone Ground Whole Wheat Fig Bars Variety Pack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_68dc94fb-8c02-40c6-847b-ee586d7507c4.jpg"
   },
   {
      "name":"Nature Valley Crunchy Oats 'n Honey Granola Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_501c0bbb-4395-47b0-9b3b-9585089f5086.jpg"
   },
   {
      "name":"Clif Bar\u00ae Chocolate Chip/Crunchy Peanut Butter Variety Pack Energy Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8a08deb9-af5e-4f0c-b7a6-62ca81aefabe.jpg"
   },
   {
      "name":"Organic Aussie Bites",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_3ca9407b-7fd5-4e35-9721-d148ad3af305.jpg"
   },
   {
      "name":"Nature Valley Peanut Butter Dark Chocolate Protein Chewy Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_090e228d-74bf-4644-91b1-c655b87f270a.jpg"
   },
   {
      "name":"Clif Kid\u00ae Organic ZBar Variety Pack Chocolate Brownie/Chocolate Chip/Iced Oatmeal Cookie Energy Snack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8593c259-f4b8-4798-9da7-1898c4c23d38.jpg"
   },
   {
      "name":"Nature Valley Sweet & Salty Nut Peanut Granola Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_79b4308d-76db-498e-a15e-15dd738e4c62.JPG"
   },
   {
      "name":"Kirkland Signature Soft & Chewy Granola Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2758c5da-6b13-4544-801c-20dee05f43c2.jpg"
   },
   {
      "name":"Nature Valley Trail Mix Fruit & Nut Chewy Granola Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_cb015e65-e459-49df-b221-00aa73e54ab8.jpg"
   },
   {
      "name":"Kirkland Signature Protein Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1f6ee038-f8b3-4a3b-a21c-b603b4c89cb2.jpg"
   },
   {
      "name":"Outshine Strawberry, Pineapple, Tangerine, Grape Fruit Ice Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_62006282-a9be-4556-b3b3-bb4db1e08523.jpg"
   },
   {
      "name":"General Mills Oats & Chocolate Chewy Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_104ae48b-ce13-4022-930f-2df1675520dc.jpg"
   },
   {
      "name":"Pure Protein Variety Pack Protein Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_19371886-5a6e-42c3-8604-496d634eb98d.jpg"
   },
   {
      "name":"Kirkland Signature Nut Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d74adba9-f3e0-4bb5-ba06-72b1ddaebd87.jpg"
   },
   {
      "name":"Zone Perfect Chocolate Peanut Butter/Fudge Graham Nutrition Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d6c3d004-b089-4496-bb70-980a686d6790.jpg"
   },
   {
      "name":"Caveman Caveman Bar Combo Pack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b02ec556-5055-4c48-8a71-6b3e7976638d.jpg"
   },
   {
      "name":"KIND Variety Pack Cereal Bar",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_e2acb7e1-c206-449e-8c33-f7c4d718e026.jpg"
   },
   {
      "name":"NuGo Nutrition Variety Bars",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_88631c35-b4ef-46b0-a81e-472f8ad40548.jpg"
   },
   {
      "name":"Granola Snack Mix",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_987ec5c3-3f8a-433e-860e-36f9ed673fe5.jpeg"
   },
   {
      "name":"Stabilyze Dark Chocolate Coconut Cashew Nutrition Bar",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4836f013-27cf-47a6-9226-8a808a83a42f.jpg"
   },
   {
      "name":"Stabilyze Low Glycemic Nutrition Dark Chocolate Thin Mint Cookie",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_73d3cf8f-12f5-4965-ba0b-7d928607b22c.jpg"
   },
   {
      "name":"Skinny Pop Original Skinny Popcorn",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b692cd58-5217-4cb1-a9dc-7521b5f59368.jpg"
   },
   {
      "name":"Pacific Gold Original Beef Jerky",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0229361f-1bd9-43ac-bd39-003f9eb4a3b8.jpg"
   },
   {
      "name":"Kirkland Signature Movie Theater Butter Microwave Popcorn",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_61da0f6b-8344-47ad-be3b-e0d074ee67f4.jpg"
   },
   {
      "name":"Pirate's Booty Aged White Cheddar Popcorn",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_01497562-3dfb-4143-aadb-16f9873adcea.jpg"
   },
   {
      "name":"Kirkland Signature Steak Strips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6cbd407b-5279-4be0-9762-891ba570fff9.jpg"
   },
   {
      "name":"Boom Chickapop Kettle Corn",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8baa1668-9a33-4ff7-8669-5c7d1ce5b7e6.jpg"
   },
   {
      "name":"G.H. Cretors Chicago Popcorn Mix",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_44aa1719-b71d-4784-926b-095844b3bc31.jpg"
   },
   {
      "name":"Golden Island All Natural Grilled Barbecue Flavor Pork Jerky",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_8c897ac4-8386-4e15-9b8d-12044e0ccc99.jpg"
   },
   {
      "name":"Oh Boy! Oberto Original Beef Jerky",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0a7817a0-12c9-4d3c-9150-a7872542ec23.jpg"
   },
   {
      "name":"Chef's Cut Real Steak Jerky",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_03cc1da6-1efc-4536-bbdd-ee6269b503fb.jpg"
   },
   {
      "name":"Oh Boy! Oberto Beef Pepperoni Sticks",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ec01f686-9cd7-4a35-a225-018e40537984.jpg"
   },
   {
      "name":"Obertos Teriyaki Turkey Jerky",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4ac12529-a26e-45a9-b618-119937ea87be.jpg"
   },
   {
      "name":"Orville Redenbacher's Gourmet Popping Corn",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_441f5200-9a0f-4fe0-b3b7-3b14d5124a93.jpg"
   },
   {
      "name":"Farmland Traditions Lean Chicken Breast Jerky Dog Treats",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c8f8c2a0-6dca-4826-9979-7c8ec07b1d26.jpg"
   },
   {
      "name":"Oh Boy! Oberto Teriyaki Beef Jerky",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f3ab20f8-319b-4a0a-9ba3-57b0d9a00676.jpg"
   },
   {
      "name":"Hsin Tung Yang Boxed Fruit Beef Jerky",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"Chewmaster Organic Turkey Jerky Treats",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_aa14ce55-658a-43e4-942f-7dd034748873.jpg"
   },
   {
      "name":"Obertos Seahawk Variety Pack Beef Jerky",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"Kirkland Signature Trail Mix",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_81a5135c-d3e2-4508-a07d-a970fc37697a.jpg"
   },
   {
      "name":"Kirkland Signature Trail Mix Vend",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_9c24c7f6-917b-44bc-aff7-916441bf549d.jpg"
   },
   {
      "name":"Kirkland Signature Cashew Cluster With Almonds And Pumpkin Seeds",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c717a530-0195-4652-b302-bc4d74580667.jpg"
   },
   {
      "name":"WildRoots Coastal Berry Blend 100% Natural Trail Mix",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_bf91d350-20dc-4977-b56e-00fea90c49f7.jpg"
   },
   {
      "name":"Kirkland Signature Sahale Snacks Pecan-Cashew Nut Crips with Cinnamon Apples & Peaches Nut Blend",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d44f5433-035f-425e-8ccb-2a10993b4c78.jpg"
   },
   {
      "name":"Granola Snack Mix",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_987ec5c3-3f8a-433e-860e-36f9ed673fe5.jpeg"
   },
   {
      "name":"Organic Simple Bites Fruit, Seeds & Nut Clusters",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_87482769-b029-4f5c-8e1b-b7cbf391e762.jpg"
   },
   {
      "name":"Kirkland Signature Sweet And Savory Snack Brittle",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"N/A Trail Mix Cluster",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"Clusters Variety Pack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"Betty Crocker Fruit by the Foot Strawberry Splash/Berry Blast Variety Pack Fruit Flavored Snacks",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_6b2f4dec-7695-4f7c-84ad-83f90b426001.jpg"
   },
   {
      "name":"Kirkland Signature Signature Organic Apple Sauce",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a377e7b5-90be-4719-ba3d-9621c4c656df.jpg"
   },
   {
      "name":"Annie's Homegrown Organic Bunny Variety Pack Fruit Snacks",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f0692384-540c-4cf0-bf19-4b7fe8301580.jpg"
   },
   {
      "name":"Sensible Portions Garden Veggie Straws, Sea Salt",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c4bf61a6-723f-424e-a231-8e559f4d0e8f.jpg"
   },
   {
      "name":"Kirkland Signature Roasted Seasoned Seaweed",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f2c4e387-41a1-4718-aae3-57544652608b.jpg"
   },
   {
      "name":"Hi-Chew Variety Fruit Chews",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_79829296-0733-44e7-a77d-1618379ef084.jpg"
   },
   {
      "name":"Stretch Island Fruit Co. 100% Natural Fruit Snacks Variety Pack",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0e46988d-f11d-4c54-949d-754a4555a432.jpg"
   },
   {
      "name":"Tree Top Fruit Snacks",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_a99ab2cf-068b-4695-b8c2-1d5f86eef0e5.jpg"
   },
   {
      "name":"Bare Sweet Heat Coconut Chips",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1992840f-e452-41a9-a172-29065b09c925.jpg"
   },
   {
      "name":"Tree Top Organic Tree Top Apple Sauce",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_c78f7680-bcb1-4a4f-8cf5-482ca8f627c3.jpg"
   },
   {
      "name":"Sun Tropics Organic Baby Bananas",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_d1319fd6-445c-4f16-be37-40da52e20a93.jpg"
   },
   {
      "name":"Kirkland Signature Organic Roasted Seaweed Snack Winter Harvest",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d1s8987jlndkbs.cloudfront.net/assets/missing-item-01941cf2b4f81344a0dc074fb259b257.png"
   },
   {
      "name":"Harvest Snaps Snapea Black Pepper Crisps",
      "img":"https://d2d8wwwkmhfcva.cloudfront.net/250x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2767b284-2fad-46ca-b103-5d784ab2a952.jpg"
   }
]

  constructor() { }

  ngOnInit() {
  }

}
