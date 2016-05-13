class User
  attr_reader :username, :first_name

  def initialize(username, first_name)
    @username = username
    @first_name = first_name
  end

  def data
    {
      username: @username,
      first_name: @first_name
    }
  end
end