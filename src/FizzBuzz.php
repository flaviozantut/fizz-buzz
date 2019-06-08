<?php

namespace FizzBuzz;

class FizzBuzz
{
    private $list;

    public function __construct(int $item)
    {
        $this->setList($item);
    }

    public function getList(): array
    {
        return $this->list;
    }

    private function setList(int $item)
    {
        $this->list = array_map(function ($i) {
            if ($this->notFizzBuzz($i)) {
                return $i;
            }

            return $this->getFizzBuzz($i);
        }, range(1, $item));
    }

    private function getFizzBuzz(int $i): string
    {
        $value = '';

        if ($i % 3 == 0) {
            $value .= 'Fizz';
        }

        if ($i % 5 == 0) {
            $value .= 'Buzz';
        }

        return $value;
    }

    public function notFizzBuzz(int $i): bool
    {
        return ($i % 3 != 0) && ($i % 5 != 0);
    }
}
