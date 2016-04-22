<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require 'vendor/autoload.php';

$app = new \Slim\App;

$container = $app->getContainer();
$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig('templates', [
        'cache' => false
    ]);
    $view->addExtension(new \Slim\Views\TwigExtension(
        $container['router'],
        $container['request']->getUri()
    ));

    return $view;
};

$app->get('/', function(Request $request, Response $response) {
    return $this->view->render($response, 'home.html');
});

$app->get('/quienes_somos', function(Request $request, Response $response) {
    return $this->view->render($response, 'quienes_somos.html');
});

$app->get('/area_competencia', function(Request $request, Response $response) {
    return $this->view->render($response, 'area_competencia.html');
});

$app->get('/contacto', function(Request $request, Response $response) {
    return $this->view->render($response, 'contacto.html');
});

// $app->get('/hello/{name}', function (Request $request, Response $response) {
//     $name = $request->getAttribute('name');
//     $response->getBody()->write("Hello, $name");
//
//     return $response;
// });

$app->run();

?>
