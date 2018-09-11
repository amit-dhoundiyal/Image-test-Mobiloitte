  //$(document).ready(function(){
    var unique_id=0;
    var img_tag_id="";
  
    function get_uid()
    {
    return unique_id++;
    };
      function set_img_tag_id(obj)
      {
      img_tag_id = obj.id;
      };
  
    function get_img_tag_id()
    {
      return "#"+img_tag_id;
    };
  
    function readURL1(input) 
    {
     img_id = get_img_tag_id();
     //alert("hello"+img_id);
    if (input.files && input.files[0]) 
    {
      var reader = new FileReader();
      reader.onload = function (e) {
          $(img_id).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
     }};
    //alert("grt");
  //});



$( document ).ready(function() {
       uid = get_uid();
       $('#img_tag').attr('id',$('#img_tag').attr('id')+uid);
     // console.log( "ready!" );
      
  });

   $(document).on('nested:fieldAdded', function(event){
 // this field was just inserted into your form
 var field = event.field; 
 // it's a jQuery object already! Now you can find date input
 var text_field = field.find('.text');
 // and activate datepicker on it
});