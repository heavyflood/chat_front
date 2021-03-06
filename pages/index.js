import Layout from '../components/Layout';
import axios from 'axios';
import classNames from 'classnames';
import ChatRooms from '../components/ChatRooms';

const Index = ({rooms}) => (
    <Layout>
        <div className={classNames('cover-container', 'd-flex', 'w-100', 'h-100', 'p-3', 'mx-auto', 'flex-column')}>
            <main  className={classNames('w-100', 'h-100', 'mx-auto')}>
                <form className={classNames('form-inline', 'center-block', 'mb-5')} >
                    <div className={classNames('form-group', 'mr-2', 'mb-auto', 'center-block')}>
                        <input type="text" id="" className={classNames('form-control', 'w-100')} />
                    </div>
                    <button type="button" onclick="" className={classNames('btn', 'btn-primary', 'mb-2')}>방생성</button>
                </form>
                <h3>채팅룸 목록</h3>
                <ChatRooms />
            </main>
        </div>
    </Layout>
);

export default Index;