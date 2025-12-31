import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout('./core/layouts/base.tsx', [
    index('./routes/home.tsx')
  ])
] satisfies RouteConfig;
