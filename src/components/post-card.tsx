import { type Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

//
export function PostCard({ date, url, excerpt, title, readTime, tags }: Post) {
  return (
    <Link href={url}>
      <Card className="group">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="space-y-4">
            <div className="space-x-2">
              {tags.map((tag) => (
                <Badge
                  variant="outline"
                  className="text-2xs w-max font-normal"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <span className="block">
              <time dateTime={date}>
                {format(parseISO(date), "LLLL d, yyyy")}
              </time>{" "}
              &#8226; <span className="text-subtext1">{readTime} min read</span>
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>{excerpt}</CardContent>
        <CardFooter className="space-x-1 group-hover:text-green">
          <strong>Read more</strong>
          <ArrowRight className="animate-bounce opacity-0 transition-opacity group-hover:opacity-100" />
        </CardFooter>
      </Card>
    </Link>
  );
}
