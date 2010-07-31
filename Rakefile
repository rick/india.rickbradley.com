namespace :deploy do
  task :webby_build do
    `webby build`
  end

  task :post_deploy => [ :webby_build ]
end
