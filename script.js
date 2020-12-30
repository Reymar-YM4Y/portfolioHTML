<script>
    $(document).ready(function(){
        $('.navbar').onScroll(function(){
            if(this.onScroll> 20){
                $(".navbar").addClass("sticky");
        }
            else{
                $(".navbar").removeClass("sticky");
            }
        })

        // toggle menu/navbar script//
        (".menu-btn").onclick(function(){
            $(".navbar .menu").toggle("active")
            $(".menu-btn i").toggle("active");

        })
   
    });
</script>