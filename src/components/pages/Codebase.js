import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../codebase.css';
import { FaCircle } from 'react-icons/fa6';
import SearchBar from '../SearchBar';

const Codebase = () => (
  <Container className="pb-5 background mt-4 boxshadowCode">
    <h2 className="mb-1">
      <FaCircle className="red" />
      {' '}
      <FaCircle className="yellow" />
      {' '}
      <FaCircle className="green" />
    </h2>
    <Row>
      <Col className="mx-0 px-0">
        <div className="code-block">
          <div>
            <pre>
              {`
class SoftwareEngineer < Human : : Base
  def about
    @sattar = Human.find(params[:id])
    @role = @sattar.role

    case @role
    when 'software_engineer'
      @sattar_data = @sattar.attributes.slice(*engineer_permitted_params)
    when 'human'
      @sattar_data = @sattar.attributes.slice(*human_permitted_params)
    else
      render json: { message: 'Not Found', data: { code: 401 } }, status: :not_found
    return
 end
  render json: @sattar_data
end
              `}
            </pre>
            <SearchBar />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);
export default Codebase;
