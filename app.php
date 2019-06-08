<?php

require __DIR__ . '/vendor/autoload.php';

use FizzBuzz\FizzBuzz;

$input = @$argv[1] ?: 15;
$fizzBuzz = new FizzBuzz($input);

print_r($fizzBuzz->getList());
