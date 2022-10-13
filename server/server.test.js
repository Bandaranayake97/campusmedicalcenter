const dbOperations = require("./controller/dbOperations");
const server = require("./server");
const seller = require("./routes/seller");
const complaint = require("./routes/complaint");
const app = new server();
const router = new Router();


describe('registerUser',()=>{
const args=[null,undefined,NaN,'',0,false];
args.forEach(a=>{
     expect(()=>{dbOperations.addcustomer(a)}).toThrow();

});
});
it('should return a user object if valid username is passed',()=>{
    dbOperations.addcustomer('charith');
    expect(result).toMatchObject({name:'charith'});
    expect(result.id).toBeGreaterThan(0);
})

 
router.get("/api/seller/:id", ctx => {
  const seller = seller.get(ctx.params.id);
  cart ? (ctx.body = cart) : (ctx.status = 404);
});
 
router.get("/api/seller/food_item", ctx => {
    const food_item = dbOperations.getfooditem();
    cart ? (ctx.body = food_item) : (ctx.status = 404);
  });
   
  router.get("/api/admin/complaint", ctx => {
    const complaint = dbOperations.complaint();
    cart ? (ctx.body = complaint) : (ctx.status = 404);
  });
app.use(router.routes());
 
module.exports = app.listen(3000);