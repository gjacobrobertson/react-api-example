# frozen_string_literal: true

class ApiProxyTest < ActiveSupport::TestCase
  setup do
    @proxy = ApiProxy.new(
      backend: 'http://example.com',
      prefix: '/test',
      bearer: 'foo'
    )
  end

  test 'should set the authorization header' do
    env = @proxy.rewrite_env({})
    assert_equal env['HTTP_AUTHORIZATION'], 'Bearer foo'
  end

  test 'should strip the prefix from the path' do
    env = @proxy.rewrite_env('PATH_INFO' => '/test/path/file.json')
    assert_equal env['PATH_INFO'], '/path/file.json'
  end

  test 'should leave the path alone when prefix does not match' do
    env = @proxy.rewrite_env('PATH_INFO' => '/not/test/path')
    assert_equal env['PATH_INFO'], '/not/test/path'
  end
end
