#include "CbMath.h"
#include <emscripten.h>

extern "C"
{
  bool CircleToCircleCollision(float x1, float y1, float r1, float x2, float y2, float r2)
  {
    Vec2 distance = Vec2(x2, y2) - Vec2(x1, y1);
    float radius = r1 + r2;
    return distance.SquareMagnitude() <= radius * radius;
  }
}