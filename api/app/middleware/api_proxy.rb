# frozen_string_literal: true

# Middleware for proxying request to an api.
# Strips a path prefix and injects a bearer token into the request
# e.g. /api/v1/endpoint -> https://api.example.com/v1/endpoint
class ApiProxy < Rack::Proxy
  def initialize(opts)
    super(opts)
    @prefix = Regexp.new("^#{opts[:prefix]}")
    @bearer = opts[:bearer]
  end

  def rewrite_env(env)
    env['HTTP_AUTHORIZATION'] = "Bearer #{@bearer}"
    env['PATH_INFO']&.sub!(@prefix, '')
    env
  end
end
