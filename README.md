# React Router v6 Nested Wildcard Route Conflict

This repository demonstrates a common issue encountered when using nested wildcard routes ('*') in React Router v6.  The wildcard route unintentionally captures paths intended for other routes, leading to unexpected behavior.

## Problem

The provided code uses a route with the path '/users/:id/*'.  While designed to capture everything under '/users/:id', it also interferes with the base '/users' route, and paths like '/users/123/profile' are incorrectly matched to '/users/:id/*' instead of going to a separate route.

## Solution

The solution involves careful route ordering and potentially using more specific route patterns or the use of Route elements with index to avoid conflicts.
