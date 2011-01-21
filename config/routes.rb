SendlocationBackend::Application.routes.draw do
  match "map/:lat/:lng/:zoom_level/:pointer_type/:description", to: "maps#show", as: :map
end
