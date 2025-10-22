// Minimal JS for form handling and UX
document.addEventListener('DOMContentLoaded', function(){
  const subscribeForm = document.getElementById('subscribeForm');
  if(subscribeForm){
    subscribeForm.addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('email').value;
      const cadence = document.getElementById('cadence').value;
      // fake submit - in production integrate with backend or Stripe/Recharge API
      alert('Thanks — we will send your first refill email to ' + email + ' (every ' + cadence + ' months).');
      subscribeForm.reset();
    });
  }

  const addToCartForm = document.getElementById('addToCartForm');
  if(addToCartForm){
    addToCartForm.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Added to cart. In production this will add the item to your shopping cart and proceed to secure checkout.');
    });
  }
});
