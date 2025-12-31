import { type RouteConfig, index, layout, prefix } from "@react-router/dev/routes";


export default [
  ...prefix("/portfolio", [
    layout('./core/layouts/base.tsx', [
    index('./routes/home.tsx')
    ])
  ])
] satisfies RouteConfig;
