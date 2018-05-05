class ApiProxy < Rack::Proxy
  def initialize(opts)
    super(opts)
    @prefix = Regexp.new("^#{opts[:prefix]}")
    @bearer = opts[:bearer]
  end

  def rewrite_env(env)
    env["HTTP_AUTHORIZATION"] = "Bearer #{@bearer}"
    env["PATH_INFO"]&.sub!(@prefix, '')
    env
  end
end