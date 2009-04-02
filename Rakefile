task :publish do
  server           = 'ack'
  remote_directory = '/var/www/ruby-encoding/public'
  
  sh "ssh #{server} mkdir -p #{remote_directory}"
  sh "rsync -av #{File.expand_path('../', __FILE__)}/public/ #{server}:#{remote_directory}/"
end