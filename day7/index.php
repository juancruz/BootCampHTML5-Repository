<?php 
    $title = "HTML5 Practice";
    $subtitle = "Day 4";
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php echo "$title: $subtitle"; ?></title>
        
        <script src="js/require.js"></script>
        <script src="js/jquery-1.7.1.js"></script><!-- jQuery -->
        <script src="js/jquery.mobile-1.0.1.js"></script><!-- include jquery toolkit here -->
        
        <script>require(["js/classes/Movie","js/classes/Director"], function(Movie,Director){
     
                    var rDogs = new Movie("1","Reservoir Dogs");
                    var quentin = new Director("Quentin Tarantino");
                    quentin.setQuotes(['We love making movies',"I guess I'll have to marry Elvis Presley to get even.", 'When people ask me if I went to film school I tell them, no, I went to films.'])
                    rDogs.setDirector(quentin);

                    alert(rDogs.getDirector().getName());
                })
        </script>
               
               
        <!-- default javascript content -->
        <!-- include your default js file here -->
    </head>
    <body>
        <header>
            <h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
        </header>

        <div id="quotes" data-role="dialog">
            
        </div>
        <h3>-- Enjoy! --</h3>
        
        <footer>
            <div><?php echo $title; ?> v1.0</div>
            <div>@author Alberto Miranda <a href="mailto:alberto@nextive.com">&lt;alberto@nextive.com&gt;</a></div>
            <div>@author Esteban Abait <a href="mailto:esteban.abait@nextive.com">&lt;esteban.abait@nextive.com&gt;</a></div>
        </footer>
    </body>
</html>