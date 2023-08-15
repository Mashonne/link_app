import { redirect } from "next/navigation";

import { fetchUserPosts } from "@/lib/actions/thread.actions";
import ThreadCard from "@/components/cards/thread-card";

interface ThreadsTabProps {
    currrentUserId: string;
    accountId: string;
    accountType: string;
}

const ThreadsTab: React.FC<ThreadsTabProps> = async ({
    currrentUserId,
    accountId,
    accountType
}) => {
    let result = await fetchUserPosts(accountId);

    if (!result) redirect('/');

    return ( 
        <section className="mt-9 flex flex-col gap-10">
            {result.threads.map((thread: any) => (
                <ThreadCard 
                    key={thread._id}
                    id={thread._id}
                    currentUserId={currrentUserId}
                    parentId={thread.parentId}
                    content={thread.text}
                    author={
                        accountType === 'User'
                            ? { name: result.name, image: result.image, id: result.id } : 
                            { name: thread.author.name, image: thread.author.image, id: thread.author.id }
                    }
                    community={thread.community}
                    createdAt={thread.createdAt}
                    comments={thread.children}
                />
            ))}
        </section>
     );
}
 
export default ThreadsTab;