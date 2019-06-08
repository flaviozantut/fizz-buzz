<?php

namespace Test;

use PHPUnit\Framework\TestCase;

use FizzBuzz\FizzBuzz;

class FizzBuzzTest extends TestCase
{
    protected $fizz = 'Fizz';
    protected $buzz = 'Buzz';
    protected $fizzBuzz = 'FizzBuzz';

    public function test_3_is_fizz()
    {
        $fizzBuzzObject = new FizzBuzz(3);

        $this->assertEquals($this->fizz, $fizzBuzzObject->getList()[2]);
    }

    public function test_5_is_buzz()
    {
        $fizzBuzzObject = new FizzBuzz(5);

        $this->assertEquals($this->buzz, $fizzBuzzObject->getList()[4]);
    }

    public function test_15_is_fizzbuzz()
    {
        $fizzBuzzObject = new FizzBuzz(15);

        $this->assertEquals($this->fizzBuzz, $fizzBuzzObject->getList()[14]);
    }

    public function test_readme_example_matching()
    {
        $example = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17];

        $fizzBuzz = (new FizzBuzz(17))->getList();
        $this->assertEquals($example, $fizzBuzz);
    }
}
