class GetPeopleTest < ActionDispatch::IntegrationTest
  test "can get a list of people" do
    get "/api/v2/people.json"
    assert_response :success
    assert_equal 'application/json', @response.content_type
    body = JSON.parse @response.body
    assert_kind_of Hash, body
    %w(data metadata).each do |key|
      assert body.key?(key), "Expected #{body.inspect} to have key #{key.inspect}"
    end
    assert_kind_of Array, body["data"]
    person = body["data"].first
    assert_not_nil person
    %w(display_name email_address title).each do |key|
      assert person.key?(key), "Expected #{person.inspect} to have key #{key.inspect}"
    end
  end
end 