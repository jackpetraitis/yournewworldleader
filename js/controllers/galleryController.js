app.controller('galleryController', function ($scope) {
	Galleria.loadTheme('lib/galleria/themes/classic/galleria.classic.min.js');
    
	$scope.data = [
	    {
	        image: 'img/pics/1.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/2.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/3.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/4.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/5.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/6.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/7.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/8.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/9.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    },
	    {
	        image: 'img/pics/10.jpg',
	        title: 'my first image',
	        description: 'Lorem ipsum caption'	        
	    }
	];
	Galleria.run('#galleria', {
    	dataSource: $scope.data,
    	responsive:true,
    	height:0.5625,
    	wait: true
	});
    $scope.home = false;
    $scope.about = false;
    $scope.gallery = true;
    $scope.territory = false;
});
