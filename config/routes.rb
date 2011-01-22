SendlocationBackend::Application.routes.draw do
  match "map/:lat/:lng/:zoom_level/:marker_type/:description", to: "maps#show", as: :map,
    :constraints => { :lat => /.*/, :lng => /.*/, :description => /.*/}
  match "map/:lat/:lng/:zoom_level/:marker_type", to: "maps#show", as: :map,
    :constraints => { :lat => /.*/, :lng => /.*/}

end
